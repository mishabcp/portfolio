import fs from "node:fs";
import path from "node:path";

const banned = {
  axios: new Set(["1.14.1", "0.30.4"]),
};

const lockPath = path.resolve(process.cwd(), "package-lock.json");

if (!fs.existsSync(lockPath)) {
  console.log("[deps:policy] No package-lock.json found, skipping lockfile scan.");
  process.exit(0);
}

const lockText = fs.readFileSync(lockPath, "utf8");
const lock = JSON.parse(lockText);
const findings = [];

const checkAndRecord = (pkgName, version, location) => {
  const bannedVersions = banned[pkgName];
  if (!bannedVersions || !version) return;
  if (bannedVersions.has(version)) {
    findings.push(`${pkgName}@${version} in ${location}`);
  }
};

const packages = lock.packages ?? {};
for (const [pkgPath, meta] of Object.entries(packages)) {
  const version = meta?.version;
  if (!version) continue;

  const pathParts = pkgPath.split("node_modules/");
  const pkgName = pathParts[pathParts.length - 1];
  if (!pkgName || pkgName === ".") continue;

  checkAndRecord(pkgName, version, `packages["${pkgPath}"]`);
}

const dependencies = lock.dependencies ?? {};
for (const [pkgName, meta] of Object.entries(dependencies)) {
  checkAndRecord(pkgName, meta?.version, `dependencies["${pkgName}"]`);
}

if (findings.length > 0) {
  console.error("[deps:policy] Banned dependency versions detected:");
  for (const finding of findings) {
    console.error(` - ${finding}`);
  }
  console.error("[deps:policy] Failing build for supply-chain safety.");
  process.exit(1);
}

console.log("[deps:policy] OK: no banned dependency versions found.");

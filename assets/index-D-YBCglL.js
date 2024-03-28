function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CHBAkWwi.js","assets/index-hjYtpwAN.js","assets/index-CHwI7Dnf.css","assets/OptionsColor-DTgLM0ir.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-hjYtpwAN.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CHBAkWwi.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BA27JFAR.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css","assets/OptionsColor-C2s5yCYD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B0lpKS8-.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BA27JFAR.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

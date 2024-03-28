function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-B7E0vMQB.js","assets/index-DHJrG4Tw.js","assets/index-CHwI7Dnf.css","assets/OptionsColor-CHixjbHT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DHJrG4Tw.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-B7E0vMQB.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater--stWtIOD.js","assets/index-B9ytZTpw.js","assets/index-D1_H_GoE.css","assets/OptionsColor-DrRz5yAo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B9ytZTpw.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater--stWtIOD.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-3OqDR_wO.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Dk51NnSt.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-3OqDR_wO.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};

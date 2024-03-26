function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Dnl77_tU.js","assets/index-C1V1BHlA.js","assets/index-CdjjhdvL.css","assets/OptionsColor-BhTyvYPk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C1V1BHlA.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Dnl77_tU.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

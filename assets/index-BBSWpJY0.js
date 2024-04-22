function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-hZo5KtiC.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css","assets/OptionsColor-Di3CoMX8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-HWl6ZkUc.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-hZo5KtiC.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-Dc8LXrfm.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dk51NnSt.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-Dc8LXrfm.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};

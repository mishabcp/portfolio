function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-BSrBezAk.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/ValueWithRandom-CTco4AGe.js","assets/AnimationOptions-BlHY50nG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Dk51NnSt.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-BSrBezAk.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};

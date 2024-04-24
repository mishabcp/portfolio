function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-CCSXeH8m.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/ValueWithRandom-CTco4AGe.js","assets/AnimationOptions-BlHY50nG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dk51NnSt.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-CCSXeH8m.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DfOdYhoU.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/ValueWithRandom-CTco4AGe.js","assets/AnimationOptions-BlHY50nG.js","assets/OptionsColor-xUnsEBQ5.js","assets/OptionsUtils-D9YHNmX1.js","assets/AnimatableColor-Ef8Phn9j.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Dk51NnSt.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DfOdYhoU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

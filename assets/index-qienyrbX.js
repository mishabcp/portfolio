function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DtmfZuDs.js","assets/index-C1V1BHlA.js","assets/index-CdjjhdvL.css","assets/ValueWithRandom-CYRsApU3.js","assets/AnimationOptions-DEpi4d_P.js","assets/OptionsColor-BhTyvYPk.js","assets/OptionsUtils-pdLhWN9s.js","assets/AnimatableColor-DyJZRFB0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C1V1BHlA.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DtmfZuDs.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-C7JB0zyV.js","assets/index-DHJrG4Tw.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-Bg_gjmcx.js","assets/AnimationOptions-C-nU3sSQ.js","assets/OptionsColor-CHixjbHT.js","assets/OptionsUtils-BG-BvoCE.js","assets/AnimatableColor-DUrf0mE9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DHJrG4Tw.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-C7JB0zyV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

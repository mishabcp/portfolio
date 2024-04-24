function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DmjJY8a4.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css","assets/ValueWithRandom-UGH3kGpe.js","assets/AnimationOptions-BvFmBsfm.js","assets/OptionsColor-DVBh2GbU.js","assets/OptionsUtils-g8qf1TJ3.js","assets/AnimatableColor-BlpUISS9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bpblo2if.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DmjJY8a4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BVRtvmxP.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css","assets/ValueWithRandom-CrG937k2.js","assets/AnimationOptions-p2LdqNMb.js","assets/OptionsColor-2gqfKYIP.js","assets/OptionsUtils-P9BtJkYM.js","assets/AnimatableColor-DiheDBPW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BoV6-cMT.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BVRtvmxP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

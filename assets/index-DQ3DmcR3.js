function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BJOEPGGM.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css","assets/ValueWithRandom-Bqe0oXca.js","assets/AnimationOptions-zxekTUaO.js","assets/OptionsColor-Di3CoMX8.js","assets/OptionsUtils-BTJwb5to.js","assets/AnimatableColor-Dfv9312I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-HWl6ZkUc.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BJOEPGGM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

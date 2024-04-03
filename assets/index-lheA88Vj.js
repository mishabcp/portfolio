function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-mXfHCzvp.js","assets/index-Cyc849hX.js","assets/index-C_6s6WpE.css","assets/ValueWithRandom-DWZ962Ti.js","assets/AnimationOptions-E39cZbym.js","assets/OptionsColor-Do6iszkN.js","assets/OptionsUtils-C7lpVyg1.js","assets/AnimatableColor-B41a2b5Z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Cyc849hX.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-mXfHCzvp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

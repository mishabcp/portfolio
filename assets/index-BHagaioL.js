function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-HGPprUag.js","assets/index-CCVac_DH.js","assets/index-CdC2wOIN.css","assets/ValueWithRandom-DiQGbyLr.js","assets/AnimationOptions-DnY7sd_X.js","assets/OptionsColor-V3-PdFKM.js","assets/OptionsUtils-Cytn94of.js","assets/AnimatableColor-A-_OM6d8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CCVac_DH.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-HGPprUag.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

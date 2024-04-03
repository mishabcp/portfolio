function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BOp0Aeit.js","assets/index-Cav5GIAJ.js","assets/index-C_6s6WpE.css","assets/ValueWithRandom-CoSXNcop.js","assets/AnimationOptions-BkAerjBH.js","assets/OptionsColor-DAq07Ua4.js","assets/OptionsUtils-CPNzgEHb.js","assets/AnimatableColor-DLVu_d48.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Cav5GIAJ.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BOp0Aeit.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

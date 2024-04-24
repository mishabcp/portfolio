function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-GOTZH-OF.js","assets/index-B9ytZTpw.js","assets/index-D1_H_GoE.css","assets/ValueWithRandom-DbNctoXL.js","assets/AnimationOptions-0VHqNl-_.js","assets/OptionsColor-DrRz5yAo.js","assets/OptionsUtils-D5RqZB3n.js","assets/AnimatableColor-Csjw1dZz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B9ytZTpw.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-GOTZH-OF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

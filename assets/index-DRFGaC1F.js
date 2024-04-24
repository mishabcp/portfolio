function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BuPntkd_.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css","assets/ValueWithRandom-TQXX9MiI.js","assets/AnimationOptions-Ctpqef3x.js","assets/OptionsColor-C2s5yCYD.js","assets/OptionsUtils-BC5qoCFr.js","assets/AnimatableColor-nSFsAdHC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B0lpKS8-.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BuPntkd_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

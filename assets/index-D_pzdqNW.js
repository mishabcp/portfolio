function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DUlOIz7n.js","assets/index-hjYtpwAN.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-BCx5IKEq.js","assets/AnimationOptions-CsMthSfC.js","assets/OptionsColor-DTgLM0ir.js","assets/OptionsUtils-Cg3bsXML.js","assets/AnimatableColor-CDPZi444.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-hjYtpwAN.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DUlOIz7n.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

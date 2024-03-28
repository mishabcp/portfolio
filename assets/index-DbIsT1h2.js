function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-D0UhMZ_N.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-DaO3c-7u.js","assets/AnimationOptions-CxzNhjQj.js","assets/OptionsColor-DsYE4uo1.js","assets/OptionsUtils-CwcQq9xp.js","assets/AnimatableColor-D4syqkje.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DlTB2wna.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-D0UhMZ_N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};

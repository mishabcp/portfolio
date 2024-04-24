function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TwinkleUpdater-D29vWzvj.js","assets/OptionsColor-DVBh2GbU.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bpblo2if.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-D29vWzvj.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TwinkleUpdater-Dh3mOHHR.js","assets/OptionsColor-2gqfKYIP.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BoV6-cMT.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-Dh3mOHHR.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};

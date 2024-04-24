function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TwinkleUpdater-CiJJPfd5.js","assets/OptionsColor-xUnsEBQ5.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Dk51NnSt.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-CiJJPfd5.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};

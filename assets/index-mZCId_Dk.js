function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-DxtVqOQ0.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Dk51NnSt.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DxtVqOQ0.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};

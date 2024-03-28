function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-B1eZOPQL.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DlTB2wna.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-B1eZOPQL.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D0l9c9J0.js","assets/index-B9ytZTpw.js","assets/index-D1_H_GoE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B9ytZTpw.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D0l9c9J0.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

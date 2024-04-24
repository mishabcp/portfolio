function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-RpRuPuOt.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B0lpKS8-.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-RpRuPuOt.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

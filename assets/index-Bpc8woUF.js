function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Cb8JgWC5.js","assets/index-C1V1BHlA.js","assets/index-CdjjhdvL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-C1V1BHlA.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Cb8JgWC5.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-C-OyD7zy.js","assets/index-Cyc849hX.js","assets/index-C_6s6WpE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Cyc849hX.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-C-OyD7zy.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

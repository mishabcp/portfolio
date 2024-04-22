function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-KnnAcMBd.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-HWl6ZkUc.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-KnnAcMBd.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

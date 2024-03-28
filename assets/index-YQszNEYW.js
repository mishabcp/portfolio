function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Dm0Z9p0E.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DlTB2wna.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Dm0Z9p0E.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

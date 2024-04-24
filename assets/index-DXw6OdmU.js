function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CA7HiOTs.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Dk51NnSt.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CA7HiOTs.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};

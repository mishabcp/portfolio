function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-X5P8Pb8B.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-HWl6ZkUc.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-X5P8Pb8B.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};

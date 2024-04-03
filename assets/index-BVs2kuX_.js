function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DxA5jBml.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BoV6-cMT.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DxA5jBml.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};

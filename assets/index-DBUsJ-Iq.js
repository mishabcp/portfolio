function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-s7VUpF3T.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DlTB2wna.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-s7VUpF3T.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};

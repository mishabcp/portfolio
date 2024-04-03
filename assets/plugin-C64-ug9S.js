function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-kGWTmF38.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BoV6-cMT.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-kGWTmF38.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};

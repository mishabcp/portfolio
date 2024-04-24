function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-CKNH4wQW.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bpblo2if.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-CKNH4wQW.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};

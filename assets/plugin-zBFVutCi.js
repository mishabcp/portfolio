function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-iCmQDMjd.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-HWl6ZkUc.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-iCmQDMjd.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DNK5Ph3w.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css","assets/index-DHs_BnAW.js","assets/index-Du-Pqexl.js","assets/index-DDTeM-L4.js","assets/index-DtZWUpS-.js","assets/index-Bz2gGEXf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B0lpKS8-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DNK5Ph3w.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DHs_BnAW.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Du-Pqexl.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DDTeM-L4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DtZWUpS-.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bz2gGEXf.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

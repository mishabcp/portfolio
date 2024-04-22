function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-WcZPtYBV.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css","assets/index-BdNfIXWa.js","assets/index-hcAy1Nw2.js","assets/index-DEYcZaRX.js","assets/index-BqM-o7su.js","assets/index-8LwfcIha.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-HWl6ZkUc.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-WcZPtYBV.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BdNfIXWa.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-hcAy1Nw2.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DEYcZaRX.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BqM-o7su.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-8LwfcIha.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

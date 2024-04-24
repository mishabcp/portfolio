function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D4FDhMAy.js","assets/index-B9ytZTpw.js","assets/index-D1_H_GoE.css","assets/index-BDMPAead.js","assets/index-CHrWijOF.js","assets/index-CwJb0LtU.js","assets/index-DpJra_TP.js","assets/index-DygKNVem.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B9ytZTpw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D4FDhMAy.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BDMPAead.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CHrWijOF.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CwJb0LtU.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DpJra_TP.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DygKNVem.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

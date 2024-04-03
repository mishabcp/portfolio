function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-SaekQzOU.js","assets/index-Cyc849hX.js","assets/index-C_6s6WpE.css","assets/index-DjQufSvW.js","assets/index-BBh0avXO.js","assets/index-DgT5xV45.js","assets/index-6o9XAnrr.js","assets/index-COVpO6CC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cyc849hX.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-SaekQzOU.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DjQufSvW.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BBh0avXO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DgT5xV45.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-6o9XAnrr.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-COVpO6CC.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

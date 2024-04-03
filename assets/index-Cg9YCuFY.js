function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BPIhSKzf.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css","assets/index-CYQLppz6.js","assets/index-zGvoH1qW.js","assets/index-BpODtuyO.js","assets/index-BT65nta7.js","assets/index-BvOHzYnX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BoV6-cMT.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BPIhSKzf.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CYQLppz6.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-zGvoH1qW.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BpODtuyO.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BT65nta7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BvOHzYnX.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

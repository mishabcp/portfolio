function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DpVavpBk.js","assets/index-CCVac_DH.js","assets/index-CdC2wOIN.css","assets/index-5o9WRNFN.js","assets/index-BmjlXTkf.js","assets/index-D65-zU-M.js","assets/index-XUGct8_1.js","assets/index-DYjwXETI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CCVac_DH.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DpVavpBk.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-5o9WRNFN.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BmjlXTkf.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D65-zU-M.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-XUGct8_1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DYjwXETI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

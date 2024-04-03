function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CuJP98M-.js","assets/index-Cav5GIAJ.js","assets/index-C_6s6WpE.css","assets/index-TC3SpjxH.js","assets/index-er2X0tlY.js","assets/index-0k51faP_.js","assets/index-QRH1-wLx.js","assets/index-DHjwl_mH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cav5GIAJ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CuJP98M-.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-TC3SpjxH.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-er2X0tlY.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-0k51faP_.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-QRH1-wLx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DHjwl_mH.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

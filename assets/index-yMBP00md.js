function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C-Jttgvc.js","assets/index-DHJrG4Tw.js","assets/index-CHwI7Dnf.css","assets/index-CJmsqLZr.js","assets/index-Cnswipc6.js","assets/index-CSPLAmC5.js","assets/index-BvgQSR7i.js","assets/index-BlAqcD5e.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DHJrG4Tw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C-Jttgvc.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CJmsqLZr.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cnswipc6.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CSPLAmC5.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BvgQSR7i.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BlAqcD5e.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

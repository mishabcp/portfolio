function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bpc8woUF.js","assets/index-C1V1BHlA.js","assets/index-CdjjhdvL.css","assets/index-OFULHcWy.js","assets/index-BvhvZw4p.js","assets/index-JJbMqUV-.js","assets/index-CuE-NYmZ.js","assets/index-SnICecn9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C1V1BHlA.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bpc8woUF.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-OFULHcWy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BvhvZw4p.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-JJbMqUV-.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CuE-NYmZ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-SnICecn9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

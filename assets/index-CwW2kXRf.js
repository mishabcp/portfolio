function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DLVwGDV1.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css","assets/index-C04l6xoh.js","assets/index-Dqx5o2ME.js","assets/index-BzIY1nM3.js","assets/index-DdxEGr_m.js","assets/index-BMiu4fB7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bpblo2if.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DLVwGDV1.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C04l6xoh.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dqx5o2ME.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BzIY1nM3.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DdxEGr_m.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BMiu4fB7.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-YQszNEYW.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css","assets/index-NxqkWtsF.js","assets/index-3TrSywNU.js","assets/index-BefxpwAp.js","assets/index-BzsXaSVx.js","assets/index-DIpgRPtv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DlTB2wna.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-YQszNEYW.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-NxqkWtsF.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-3TrSywNU.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BefxpwAp.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BzsXaSVx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DIpgRPtv.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-cE6B21f4.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/index-amPVFSio.js","assets/index-mZCId_Dk.js","assets/index-_2uQWyIm.js","assets/index-tHc75Wsj.js","assets/index-BcQ3Gtel.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dk51NnSt.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-cE6B21f4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-amPVFSio.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-mZCId_Dk.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-_2uQWyIm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-tHc75Wsj.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BcQ3Gtel.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

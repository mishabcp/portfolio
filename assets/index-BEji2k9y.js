function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CvCXeZFF.js","assets/index-hjYtpwAN.js","assets/index-CHwI7Dnf.css","assets/index-CwPx2Joz.js","assets/index-Kpqr9yCG.js","assets/index-CudzIpm8.js","assets/index-BgkA73ZC.js","assets/index-DA2V0z4T.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-hjYtpwAN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CvCXeZFF.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CwPx2Joz.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Kpqr9yCG.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CudzIpm8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BgkA73ZC.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DA2V0z4T.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

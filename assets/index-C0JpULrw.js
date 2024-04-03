function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CzLRdnws.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css","assets/OptionsColor-2gqfKYIP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BoV6-cMT.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CzLRdnws.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

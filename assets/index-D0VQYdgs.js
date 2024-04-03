function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DRce5Rux.js","assets/index-CCVac_DH.js","assets/index-CdC2wOIN.css","assets/OptionsColor-V3-PdFKM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CCVac_DH.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DRce5Rux.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

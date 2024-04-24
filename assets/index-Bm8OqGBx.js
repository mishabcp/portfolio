function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BdoKtAFK.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/OptionsColor-xUnsEBQ5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Dk51NnSt.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BdoKtAFK.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

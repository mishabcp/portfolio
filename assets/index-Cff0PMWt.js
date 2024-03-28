function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Cjh54iYO.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css","assets/OptionsColor-DsYE4uo1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DlTB2wna.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Cjh54iYO.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

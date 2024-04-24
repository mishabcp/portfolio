function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CDnQk0ix.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css","assets/OptionsColor-DVBh2GbU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bpblo2if.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CDnQk0ix.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};

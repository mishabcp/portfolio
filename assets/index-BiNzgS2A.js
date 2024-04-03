function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-CWHm36UN.js","assets/ValueWithRandom-CrG937k2.js","assets/AnimationOptions-p2LdqNMb.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BoV6-cMT.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CWHm36UN.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};

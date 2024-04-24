function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-B3hBFW0C.js","assets/ValueWithRandom-UGH3kGpe.js","assets/AnimationOptions-BvFmBsfm.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Bpblo2if.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-B3hBFW0C.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};

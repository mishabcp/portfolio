function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-BvFVDLpg.js","assets/index-Bpblo2if.js","assets/index-BHAKbb8t.css","assets/ValueWithRandom-UGH3kGpe.js","assets/AnimationOptions-BvFmBsfm.js","assets/OptionsColor-DVBh2GbU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Bpblo2if.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-BvFVDLpg.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

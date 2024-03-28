function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CXIy_A-Y.js","assets/index-DHJrG4Tw.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-Bg_gjmcx.js","assets/AnimationOptions-C-nU3sSQ.js","assets/OptionsColor-CHixjbHT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DHJrG4Tw.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CXIy_A-Y.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

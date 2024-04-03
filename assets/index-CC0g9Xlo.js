function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-_oJlyvWc.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css","assets/ValueWithRandom-CrG937k2.js","assets/AnimationOptions-p2LdqNMb.js","assets/OptionsColor-2gqfKYIP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BoV6-cMT.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-_oJlyvWc.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

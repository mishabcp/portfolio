function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CFuxqZlN.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/ValueWithRandom-CTco4AGe.js","assets/AnimationOptions-BlHY50nG.js","assets/OptionsColor-xUnsEBQ5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dk51NnSt.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CFuxqZlN.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

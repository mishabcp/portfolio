function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-C677ovpq.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css","assets/ValueWithRandom-TQXX9MiI.js","assets/AnimationOptions-Ctpqef3x.js","assets/OptionsColor-C2s5yCYD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B0lpKS8-.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-C677ovpq.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

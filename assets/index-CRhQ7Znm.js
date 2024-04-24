function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CttiLmV9.js","assets/index-B9ytZTpw.js","assets/index-D1_H_GoE.css","assets/ValueWithRandom-DbNctoXL.js","assets/AnimationOptions-0VHqNl-_.js","assets/OptionsColor-DrRz5yAo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B9ytZTpw.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CttiLmV9.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

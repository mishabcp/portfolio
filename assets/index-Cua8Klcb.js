function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-se-O5MLV.js","assets/index-C1V1BHlA.js","assets/index-CdjjhdvL.css","assets/ValueWithRandom-CYRsApU3.js","assets/AnimationOptions-DEpi4d_P.js","assets/OptionsColor-BhTyvYPk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C1V1BHlA.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-se-O5MLV.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

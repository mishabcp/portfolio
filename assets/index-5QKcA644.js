function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-BdC9y33u.js","assets/index-Cav5GIAJ.js","assets/index-C_6s6WpE.css","assets/ValueWithRandom-CoSXNcop.js","assets/AnimationOptions-BkAerjBH.js","assets/OptionsColor-DAq07Ua4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Cav5GIAJ.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-BdC9y33u.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

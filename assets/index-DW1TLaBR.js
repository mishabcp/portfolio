function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-X7tFrKrY.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css","assets/ValueWithRandom-Bqe0oXca.js","assets/AnimationOptions-zxekTUaO.js","assets/OptionsColor-Di3CoMX8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-HWl6ZkUc.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-X7tFrKrY.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

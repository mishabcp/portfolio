function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-2HIm-CPp.js","assets/index-CCVac_DH.js","assets/index-CdC2wOIN.css","assets/ValueWithRandom-DiQGbyLr.js","assets/AnimationOptions-DnY7sd_X.js","assets/OptionsColor-V3-PdFKM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CCVac_DH.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-2HIm-CPp.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

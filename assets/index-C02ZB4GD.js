function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DngTZhQy.js","assets/index-DlTB2wna.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-DaO3c-7u.js","assets/AnimationOptions-CxzNhjQj.js","assets/OptionsColor-DsYE4uo1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DlTB2wna.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DngTZhQy.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

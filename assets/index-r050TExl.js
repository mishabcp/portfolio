function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DNNSF-Jr.js","assets/index-hjYtpwAN.js","assets/index-CHwI7Dnf.css","assets/ValueWithRandom-BCx5IKEq.js","assets/AnimationOptions-CsMthSfC.js","assets/OptionsColor-DTgLM0ir.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-hjYtpwAN.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DNNSF-Jr.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};

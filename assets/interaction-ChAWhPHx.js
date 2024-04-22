function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DZpfVXJ7.js","assets/Ranges-DkcvHtGY.js","assets/index-HWl6ZkUc.js","assets/index-C_6s6WpE.css","assets/index-OBzYZcuB.js","assets/OptionsColor-Di3CoMX8.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-HWl6ZkUc.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DZpfVXJ7.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};

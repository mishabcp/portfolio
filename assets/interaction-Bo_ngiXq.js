function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-Bd6eNITc.js","assets/Ranges-RjQgGfr1.js","assets/index-Dk51NnSt.js","assets/index-UwQkMPEQ.css","assets/index-CeXb9cuc.js","assets/OptionsColor-xUnsEBQ5.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dk51NnSt.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-Bd6eNITc.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};

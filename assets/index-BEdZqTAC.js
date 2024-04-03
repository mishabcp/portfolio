function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCircleShapeGenerator-DGg5n2Sm.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-BoV6-cMT.js","assets/index-BczBsJIn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BoV6-cMT.js";async function c(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-DGg5n2Sm.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{c as loadEmittersShapeCircle};

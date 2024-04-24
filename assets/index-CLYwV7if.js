function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCircleShapeGenerator-DKhS5xK_.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-B0lpKS8-.js","assets/index-C0uE-Mqu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B0lpKS8-.js";async function c(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-DKhS5xK_.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{c as loadEmittersShapeCircle};

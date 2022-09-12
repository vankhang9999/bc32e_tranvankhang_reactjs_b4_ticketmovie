import { DAT_GHE, HUY_GHE } from "../type/BTDatVeType"

export const datGheAcion=(ghe)=>{
  return{
    type:DAT_GHE,
    ghe
  }
}
export const huyGheAcion=(soGhe)=>{
  return{
    type:HUY_GHE,
    soGhe
  }
}
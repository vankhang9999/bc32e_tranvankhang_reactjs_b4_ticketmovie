import { DAT_GHE, HUY_GHE } from "../redux/type/BTDatVeType";

const stateDefault={
  danhSachGheDangDat:[
  ]
}

const MovieTicketReducer=(state=stateDefault,action)=>{
  switch(action.type){
    case DAT_GHE:{
      let danhSachGheupdate=[...state.danhSachGheDangDat]
      let index=danhSachGheupdate.findIndex(ghedangdat=>ghedangdat.soGhe===action.ghe.soGhe)
      if(index!==-1){
        danhSachGheupdate.splice(index,1);
      }else{
        danhSachGheupdate.push(action.ghe)
      }
      state.danhSachGheDangDat=danhSachGheupdate
      return {...state}
    }
    case HUY_GHE:{
      let danhSachGhe=[...state.danhSachGheDangDat]
      console.log('arr',danhSachGhe)
      let index=danhSachGhe.findIndex(ghehuy=>ghehuy.soGhe===action.soGhe)
      if(index!==-1){
        danhSachGhe.splice(index,1)
      }
      state.danhSachGheDangDat=danhSachGhe
      return {...state}
    }
    default:return{...state}
  }
}
export default MovieTicketReducer
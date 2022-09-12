import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAcion } from "../redux/action/BTDatVeAction";
class HangGhe extends Component {
  renderghe = () => {
    console.log(this.props);
    return this.props.hangghe.danhSachGhe.map((ghe, index) => {
      let GheDaDat = "";
      let disable = false;
      //Trang thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        GheDaDat = "gheDuocChon";
        disable = true;
      }
      //Xét trạng thái ghế đang đặt
      let cssGheDagDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDagDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          className={`ghe ${GheDaDat} ${cssGheDagDat}`}
          disabled={disable}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  rendersohang = () => {
    return this.props.hangghe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };
  renderhangghe = () => {
    if (this.props.sohangghe === 0) {
      return (
        <div className="ml-3">
          {this.props.hangghe.hang}
          {this.rendersohang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangghe.hang}
          {this.renderghe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-warning text-left ml-5 mt-2"
        style={{ fontSize: "25px" }}
      >
        {this.renderhangghe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.MovieTicketReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAcion(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

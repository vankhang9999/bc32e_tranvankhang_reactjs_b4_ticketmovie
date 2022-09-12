import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../redux/type/BTDatVeType";

class ThongTinGhe extends Component {
  render() {
    const { GheDat } = this.props;
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "20px" }}>
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "20px" }}>
            ghế đang đặt
          </span>
          <br />
          <button className="ghe ml-0"></button>
          <span className="text-light ml-2 " style={{ fontSize: "20px" }}>
            ghế chưa đặt
          </span>
        </div>
        <table className="table " border="2">
          <thead>
            <tr className="text-light" style={{ fontSize: "25px" }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>hủy</th>
            </tr>
          </thead>
          <tbody className="text-warning">
            {GheDat.map((gheDangDat, index) => {
              return (
                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}VNĐ</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch({
                          type: HUY_GHE,
                          soGhe: gheDangDat.soGhe,
                        });
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="text-danger">
            <tr>
              <td></td>
              <td>Tổng Tiền</td>
              <td>
                {this.props.GheDat.reduce((tongTien, value) => {
                  return (tongTien += value.gia);
                }, 0).toLocaleString()}
                VNĐ
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    GheDat: state.MovieTicketReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps, null)(ThongTinGhe);

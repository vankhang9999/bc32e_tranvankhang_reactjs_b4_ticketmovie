import React, { Component } from "react";
import "./BTBookingTicket.css";
import hangGheJson from "./danhSachGhe.json";
import HangGhe from "./HangGhe";
import ThongTinGhe from "./ThongTinGhe";
export default class BTTicketMove extends Component {
  renderHangGhe = () => {
    return hangGheJson.map((hangghe, index) => {
      return (
        <div key={index}>
          <HangGhe hangghe={hangghe} sohangghe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundImage: "url(./img/bgmovie.jpg)",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-8 text-center">
                  <h2 className="text-light display-5">
                    ĐẶT VÉ XEM PHIM ACTION MOVIE
                  </h2>
                  <div
                    className="mt-3 text-warning"
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                  >
                    Màn Hình
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div className="screen"></div>
                  </div>
                  {this.renderHangGhe()}
                </div>
                <div className="col-4">
                  <div
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                    className="text-light mt-5"
                  >
                    DANH SÁCH GHẾ BẠN CHỌN
                  </div>
                  <ThongTinGhe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

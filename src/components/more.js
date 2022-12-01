export default {
  name: "more-info",

  render() {
    return (
      <div style="width: 100%; height: 657px; background: #212326; display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-evenly; height: 520px; border-bottom: 1px solid grey;">
          <div style="flex: 2; display: flex; flex-direction: column; justify-content: space-between; margin-top: 70px; margin-left: 60px; margin-bottom: 25px;">
            <div style="">
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;  margin-bottom: 20px;">
                CÔNG TY CỔ PHẦN GIẢI PHÁP TRỰC TUYẾN VIETNAMBIZ
              </p>
              <p class="footer_text">Giới thiệu</p>
              <p class="footer_text">Tuyển dụng</p>
              <p class="footer_text">Hóa đơn điện tử</p>
              <p class="footer_text">Chính sách bảo mật</p>
              <p class="footer_text">Điều khoản dịch vụ</p>
            </div>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF; margin-bottom: 20px;">
                TRỢ GIÚP
              </p>
              <p class="footer_text">Subiz Support Team</p>
              <p class="footer_text">FAQs</p>
            </div>
          </div>
          <div style="flex: 1;  margin-top: 70px; margin-bottom: 50px;">
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;    margin-bottom: 20px; ">
                CHỨC NĂNG
              </p>
              <p class="footer_text">Subiz chat</p>
              <p class="footer_text">Subiz Email</p>
              <p class="footer_text">Facebook messenger</p>
              <p class="footer_text">Chuyển đổi khách hàng</p>
              <p class="footer_text">Subiz cho Marketing</p>
              <p class="footer_text">Quản lý Fanpage</p>
            </div>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;  margin-top: 70px; margin-bottom: 25px;">
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;    margin-bottom: 20px;">
                SẢN PHẨM
              </p>
              <p class="footer_text">Tính năng</p>
              <p class="footer_text">Bảng giá</p>
              <p class="footer_text">Cập nhật</p>
              <p class="footer_text">Cộng đồng Subiz</p>
            </div>
            <div>
              <img src={require("../assets/img/footer_logo.png")} />
            </div>
          </div>
          <div style="flex: 2;  margin-top: 70px; margin-right: 60px; margin-bottom: 25px; display: flex; flex-direction: column; ">
            <div style="height: 114px;">
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF; margin-bottom: 20px;">
                SUBIZ APP MOBILE:
              </p>
              <div>
                <img
                  src={require("../assets/img/google_play.png")}
                  style="margin-right: 40px;"
                />
                <img src={require("../assets/img/app_store.png")} />
              </div>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 300px;">
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
                LIÊN HỆ
              </p>
              <p style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; color: #979797;">
                CÔNG TY CỔ PHẦN GIẢI PHÁP TRỰC TUYẾN VIETNAMBIZ (VIETNAMBIZ
                ONLINE SOLUTIONS CORPORATION)
              </p>
              <p style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; color: #979797;">
                <span style="color: #FFFFFF;">Trụ sở:</span> Tầng 6, tòa nhà
                Kailash, ngõ 92 Trần Thái Tông, Phường Dịch Vọng Hậu, Quận Cầu
                Giấy, Hà Nội
              </p>
              <p style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; color: #FFFFFF;">
                Tổng đài chăm sóc khách hàng:{" "}
                <span style="color: #F2724B;">+84 2473.021.368</span>
              </p>
              <p style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; color: #FFFFFF;">
                Email: <span style="color: #0084CB;">Support@subiz.com</span>
              </p>
              <p style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; color: #FFFFFF;">
                GPDKKD số 0102549247 do Sở Kế hoạch và Đầu tư thành phố Hà Nội
                cấp ngày 26/11/2007
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={require("../assets/img/logo-subiz.png")} />
          <div style="font-style: normal; font-weight: 400; font-size: 16.0361px; line-height: 19px; text-align: center; color: #FFFFFF;">
            © Copyright Subiz 2019 - Công cụ tương tác khách hàng đa kênh
          </div>
          <div>
                  
          </div>
        </div>
      </div>
    );
  },
};

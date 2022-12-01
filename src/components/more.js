export default {
  name: "more-info",

  render() {
    return (
      <div style="width: 100%; height: 657px; background: #212326; display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-evenly;">
          <div style='flex: 2;'>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
                CÔNG TY CỔ PHẦN GIẢI PHÁP TRỰC TUYẾN VIETNAMBIZ
              </p>
              <p class="footer_text">Giới thiệu</p>
              <p class="footer_text">Tuyển dụng</p>
              <p class="footer_text">Hóa đơn điện tử</p>
              <p class="footer_text">Chính sách bảo mật</p>
              <p class="footer_text">Điều khoản dịch vụ</p>
            </div>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
                TRỢ GIÚP
              </p>
              <p class="footer_text">Subiz Support Team</p>
              <p class="footer_text">FAQs</p>
            </div>
          </div>
          <div style='flex: 1;'>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
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
          <div style='flex: 1;'>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
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
          <div style='flex: 2;'>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
                SUBIZ APP MOBILE:
              </p>
              <div>
                <img src={require("../assets/img/google_play.png")} />
                <img src={require("../assets/img/app_store.png")} />
              </div>
            </div>
            <div>
              <p style="font-style: normal;  font-weight: 700;  font-size: 22.1743px; line-height: 27px; color: #FFFFFF;">
                LIÊN HỆ
              </p>
              <p>
                CÔNG TY CỔ PHẦN GIẢI PHÁP TRỰC TUYẾN VIETNAMBIZ (VIETNAMBIZ
                ONLINE SOLUTIONS CORPORATION)
              </p>
              <p>
                <span>Trụ sở:</span> Tầng 6, tòa nhà Kailash, ngõ 92 Trần Thái
                Tông, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội
              </p>
              <p>
                Tổng đài chăm sóc khách hàng: <span>+84 2473.021.368</span>
              </p>
              <p>
                Email: <a>Support@subiz.com</a>
              </p>
              <p>
                GPDKKD số 0102549247 do Sở Kế hoạch và Đầu tư thành phố Hà Nội
                cấp ngày 26/11/2007
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  },
};

export default {
  name: "subiz",
  data() {
    return {};
  },

  render() {
    return (
      <div class="" style="width: 100%; position: relative">
        <img
          src={require("../assets/img/background-subiz.png")}
          class="background-subiz"
        />
        <div class="page-header">
          <div class="logo-subiz">
            <img src={require("../assets/img/logo-subiz.png")} />
          </div>
          <div class="menu">
            <ul id="menu">
              <li>
                <a href="javascript:void(0)" class="text__menu">
                  Sản phẩm<span class="arrow arrow-down "></span>
                </a>
                <ul class="dropdown_menu">
                  <li>
                    <a href="javascript:void(0)">Live Chat Web</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Messenger</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Fanpage</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Zalo OA</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Instagram</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Email</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Tổng đài</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" class="text__menu">
                  Công cụ<span class="arrow arrow-down"></span>
                </a>
                <ul class="dropdown_menu">
                  <li>
                    <a href="javascript:void(0)">Quản lý theo đội nhóm</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Công cụ marketing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Subiz Live</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Quản lý Sản phẩm</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Quản lý đơn hàng</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Crm quản lý khách hàng</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" class="text__menu">
                  Bảng giá
                </a>
              </li>

              <li class="">
                <a href="javascript:void(0)" class="text__menu">
                  Tài nguyên<span class="arrow arrow-down"></span>
                </a>
                <ul class="dropdown_menu">
                  <li>
                    <a href="javascript:void(0)">Dịch vụ khách hàng</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Kiến thức tổng đài</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Marketing trực tuyến</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Thông báo</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Ứng dụng và triển khai Subiz hiệu quả
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Câu chuyện thành công</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" class="text__menu">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div class="button">
            <button class="register_button" style="background: none;">
              <div class="text__button" style="color: black;">
                Đăng nhập
              </div>
            </button>
            <button class="register_button">
              <div class="text__button">Đăng kí</div>
            </button>
          </div>
        </div>
        <div class="text_header">
          <p class="text__desc">Subiz kết nối</p>
          <p class="text__desc">Tương tác hỗ trợ</p>
          <p class="text__desc">quản lý kênh bán hàng!</p>
          <p style="width: 550px; font-family: unset; font-style: normal; font-weight: 400; font-size: 25px; line-height: 30px; color: #6E6E73;">
            Đồng hành cùng doanh nghiệp trên hành trình chinh phục khách hàng
          </p>
        </div>
        <div>
          <button class="register_now_button">
            <div style="font-family: unset; font-style: normal; font-weight: 700; font-size: 25px; line-height: 30px; color: #FFFFFF; cursor: pointer">
              Đăng kí ngay
            </div>
          </button>
        </div>
      </div>
    );
  },
};

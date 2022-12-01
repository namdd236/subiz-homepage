export default {
  name: "automatic",

  render() {
    return (
      <div style="width: 100%; display: flex; flex-direction: column; margin-top: 80px;">
        <div style='display: flex; flex-direction: column; justify-content: center; align-items: center;'>
          <p style="width: 1100px; font-family: unset; font-style: normal; font-weight: 700; font-size: 48px; line-height: 58px; text-align: center; text-transform: uppercase;">
            TỰ ĐỘNG HÓA
          </p>
          <p style='width: 1065px; ont-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 37px; color: #6E6E73; text-align: center; margin-top: 15px;'>
            Tự dộng vận hành và thiết lập nhiều chiến dịch tương tác khách hàng
            tự động dựa trên hành vi cụ thể. Tăng trải nghiệm và dễ dàng thuyết
            phục khách hàng
          </p>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
          <div style="flex: 1; display: flex; justify-content: center; ">
            <img
              src={require("../assets/img/auto_bot_img.png")}
              style="height: 100%;"
            />
          </div>
          <div style="display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: center;">
            <div style="width: 535px; font-style: normal; font-weight: 700; font-size: 45px; line-height: 54px;">
              Chatbot tự động
            </div>
            <div style="width: 535px; font-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 29px; color: #6E6E73;">
              Chủ động chào hỏi mỗi khi khách hàng truy cập, trả lời các cuộc
              trò chuyện từ một màn hình, bất cứ nơi nào khách hàng của bạn nhắn
              tin cho bạn. Thu thập thông tin và chuyển đúng đến nhóm phụ trách.
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
          <div style="display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: center;">
            <div style="width: 535px; font-style: normal; font-weight: 700; font-size: 45px; line-height: 54px;">
              Tự động phân công việc
            </div>
            <div style="width: 535px; font-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 29px; color: #6E6E73;">
              Phân phối các cuộc hội thoại đến đúng tư vấn viên, hỗ trợ khách
              hàng nhanh chóng, tương tác chuyên nghiệp với những mẫu tin nhắn
              có sẵn, emoji, hình ảnh,... giúp dễ dàng chuyển đổi và xây dựng
              mối quan hệ tốt đẹp với khách hàng
            </div>
          </div>
          <div style="flex: 1; display: flex; justify-content: center; ">
            <img
              src={require("../assets/img/auto_assign_img.png")}
              style="height: 100%;"
            />
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
          <div style="flex: 1; display: flex; justify-content: center; ">
            <img
              src={require("../assets/img/auto_reply_img.png")}
              style="height: 100%;"
            />
          </div>
          <div style="display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: center;">
            <div style="width: 535px; font-style: normal; font-weight: 700; font-size: 45px; line-height: 54px;">
              Tự động phản hồi khách hàng
            </div>
            <div style="width: 535px; font-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 29px; color: #6E6E73;">
              Tự động hóa các tương tác, phản hồi khách hàng trên trang Mạng xã
              hội dựa trên hành vi khách hàng, tăng sự hài lòng, trải nghiệm tốt
              và dễ dàng thuyết phục khách hàng sử dụng sản phẩm/dịch vụ
            </div>
          </div>
        </div>
      </div>
    );
  },
};

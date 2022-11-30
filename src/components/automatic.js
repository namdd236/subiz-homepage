export default {
  name: "automatic",

  render() {
    return (
      <div style="width: 100%; display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
          <div style='flex: 1;'>
            <img
              src={require("../assets/img/auto_bot_img.png")}
              style="height: 100%;"
            />
          </div>
          <div style='display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: flex-start;'>
            <div style="font-style: normal; font-weight: 700; font-size: 45px; line-height: 54px;">
              Chatbot tự động
            </div>
            <div style="width: 535px; font-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 29px; color: #6E6E73;">
              Chủ động chào hỏi mỗi khi khách hàng truy cập, trả lời các cuộc
              trò chuyện từ một màn hình, bất cứ nơi nào khách hàng của bạn nhắn
              tin cho bạn. Thu thập thông tin và chuyển đúng đến nhóm phụ trách.
            </div>
          </div>
        </div>
        <div style="">
          <img
            src={require("../assets/img/auto_assign_img.png")}
            style="height: 100%;"
          />
        </div>
      </div>
    );
  },
};

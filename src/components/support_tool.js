export default {
  name: "support-tool",

  render() {
    return (
      <div style="width: 100%; height: 1080px; background: #F7FAFF; margin-top: 50px;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 75px;">
          <p style="width: 1100px; font-family: unset; font-style: normal; font-weight: 700; font-size: 48px; line-height: 58px; text-align: center; text-transform: uppercase;">
            CÔNG CỤ HỖ TRỢ
          </p>
        </div>
        <div style="width: 100%; height: 890px; display: flex; flex-direction: column; justify-content: space-evenly;">
          <div style="width: 100%; display: flex; justify-content: space-evenly;">
            <img src={require("../assets/img/manage_group_img.png")} />
            <img src={require("../assets/img/manage_order_img.png")} />
            <img src={require("../assets/img/marketing_tool_img.png")} />
          </div>
          <div style="width: 100%; display: flex; justify-content: space-evenly;">
            <img src={require("../assets/img/manage_product_img.png")} />
            <img src={require("../assets/img/subiz_live_img.png")} />
            <img src={require("../assets/img/crm_customer_img.png")} />
          </div>
        </div>
      </div>
    );
  },
};

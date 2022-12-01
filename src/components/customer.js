export default {
  name: "customer",

  render() {
    return (
      <div style="width: 100%; margin-top: 70px;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <p style="width: 1100px; font-family: unset; font-style: normal; font-weight: 700; font-size: 48px; line-height: 58px; text-align: center; text-transform: uppercase;">
            Khách hàng
          </p>
          <p style="width: 1065px; ont-style: normal; font-weight: 400; font-size: 24.9461px; line-height: 37px; color: #6E6E73; text-align: center; margin-top: 15px;">
            Hơn 20.000+ doanh nghiệp đã tin dùng Subiz
          </p>
        </div>
        <div style="width: 100%; height: 445px; display: flex; flex-direction: column; justify-content: space-evenly;">
          <div style="width: 100%; display: flex; justify-content: space-evenly;">
            <img src={require("../assets/img/logo_mywork.png")} />
            <img src={require("../assets/img/logo_vingroup.png")} />
            <img src={require("../assets/img/logo_pnj.png")} />
            <img src={require("../assets/img/logo_fpt.png")} />
          </div>
          <div style="width: 100%; display: flex; justify-content: space-evenly;">
            <img src={require("../assets/img/logo_kidplaza.png")} />
            <img src={require("../assets/img/logo_mazda.png")} />
            <img src={require("../assets/img/logo_pico.png")} />
            <img src={require("../assets/img/logo_ncb.png")} />
          </div>
        </div>
      </div>
    );
  },
};

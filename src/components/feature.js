export default {
  name: "feature",

  render() {
    return (
      <div style="width: 95%; height: 687px; background: #ECF3FF; border-radius: 38px; display: flex; flex-direction: row; align-items: center;">
        <div style="display: flex; height: 92%; flex-direction: column; justify-content: space-evenly; align-items: left; flex: 1; padding-left: 70px; padding-top: 50px;">
          <div style="width: 440px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div class="background_icon">
              <img
                src={require("../assets/img/interative_icon_active.png")}
                style="width: 42px; height: 42px;"
              />
            </div>
            <div class="background_icon" style='background: #FFA412;'>
              <img
                src={require("../assets/img/promote_icon_active.png")}
                style="width: 42px; height: 42px;"
              />
            </div>
            <div class="background_icon" style='background: #0068FE;'>
              <img
                src={require("../assets/img/potential_icon_active.png")}
                style="width: 42px; height: 42px;"
              />
            </div>
            <div class="background_icon" style='background: #FF3647;'>
              <img
                src={require("../assets/img/manage_icon_active.png")}
                style="width: 42px; height: 42px;"
              />
            </div>
          </div>
          <div style='height: 280px;'>
            <p style="width: 330px; font-family: unset; font-style: normal; font-weight: 700; font-size: 25px; line-height: 30px; color: #000000;">
              Tương tác với khách hàng
            </p>
            <p style="width: 400px; font-family: unset; font-style: normal; font-weight: 400; font-size: 20px; line-height: 24px; color: #000000;">
              Tương tác với khách hàng trên nhiều kênh ngay trên một nền tảng
              Website, Tổng đài, Mạng xã hội,...
            </p>
          </div>
          <div style='display: flex; height: 100px; align-items: center; cursor: pointer;'>
            <span style="font-family: unset; font-style: normal; font-weight: 700; ont-size: 20px; line-height: 24px; font-size: 25px; margin-right: 10px;">
              Tìm hiểu thêm{" "}
            </span>
            <img
              src={require("../assets/img/arrow_left.png")}
              style="width: 41px;"
            />
          </div>
        </div>
        <div style='flex: 1;'>
          <img src={require("../assets/img/interative_img.png")} />
        </div>
      </div>
    );
  },
};

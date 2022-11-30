export default {
  name: "solution",

  render() {
    return (
      <div style="position: relative; width: 100%; margin-top: 100px;">
        <img
          src={require("../assets/img/background_solution.png")}
          style="width: 100%;"
        />
        <p style="width: 1100px; position: absolute; top: 85px; left: 50%; transform: translate(-50%, 0%); font-family: unset; font-style: normal; font-weight: 700; font-size: 48px; line-height: 58px; text-align: center; text-transform: uppercase;">
          Giải pháp quản lý tập trung nhiều kênh tương tác khách hàng
        </p>
        <div style='position: absolute; bottom: 157px; right: 162px; display: flex; height: 100px; align-items: center; cursor: pointer;'>
            <span style="font-family: unset; font-style: normal; font-weight: 700; ont-size: 20px; line-height: 24px; font-size: 25px; margin-right: 10px;">
              Tìm hiểu thêm{" "}
            </span>
            <img
              src={require("../assets/img/arrow_left.png")}
              style="width: 41px;"
            />
          </div>
      </div>
    );
  },
};

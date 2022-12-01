export default {
  name: "advise",

  render() {
    return (
      <div style="width: 100%; height: 260px; display: flex; align-items: center; background: #F7FAFF;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <p style="width: 620px; font-style: normal; font-weight: 700; font-size: 45.5202px; line-height: 55px; color: #0047CC;">
            ĐĂNG KÝ TƯ VẤN
          </p>
          <p style="width: 620px; font-style: normal; font-weight: 400; font-size: 22.711px; line-height: 34px; color: #1D1D1F;">
            Vui lòng để lại thông tin để chúng tôi có thể tư vấn rõ hơn
          </p>
        </div>
        <div style="flex: 1; display: flex; justify-content: center;">
          <input
            placeholder="name@company.com"
            style="height: 68px; padding-left: 10px; width: 320px; border: 1px solid #979797; border-radius: 5px; border-right: none; font-style: normal; font-weight: 400; font-size: 26px; color: #D1D1D1;"
          />
          <button style="background: linear-gradient(95.98deg, #EEB425 0.72%, #FA614E 100%); border-radius: 0px 5px 4px 0px; border: none; width: 200px; height: 70px;">
          <p style='font-style: normal; font-weight: 700; font-size: 25px; line-height: 30px; color: #FFFFFF;'>Đăng ký</p>
          </button>
        </div>
      </div>
    );
  },
};

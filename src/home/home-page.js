import "../assets/scss/style.css";

import Subiz from "../components/subiz.js";
import Feature from "../components/feature.js";
import Solution from "../components/solution.js";
import Automatic from "../components/automatic.js";
import SupportTool from "../components/support_tool.js";
import Customer from '../components/customer.js'
import Advise from '../components/advise.js'
import More from '../components/more.js'

export default {
  name: "subiz",

  render() {
    return (
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <Subiz />
        <Feature />
        <Solution />
        <Automatic />
        <SupportTool />
        <Customer />
        <Advise />
        <More />
      </div>
    );
  },
};

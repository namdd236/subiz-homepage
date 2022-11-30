import "../assets/scss/style.css";

import Subiz from "../components/subiz.js";
import Feature from '../components/feature.js'
import Solution from '../components/solution.js'
import Automatic from '../components/automatic.js'

export default {
  name: "subiz",

  render() {
    return (
      <div style='display: flex; flex-direction: column; justify-content: center; align-items: center;'>
        <Subiz />
        <Feature />
        <Solution />
        <Automatic />
      </div>
    );
  },
};

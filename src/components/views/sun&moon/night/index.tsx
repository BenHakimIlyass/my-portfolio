import React from "react";
import { motion } from "framer-motion";
import Moon from "./moon";
import Beach from "./beach";
import Buoy from "./buoy";
import Lighthouse from "./lighthouse";

const Midday = ({ x, y, ...props }) => {
  return (
    <div {...props}>
      <Moon x={x} y={y} />
      <Beach />
      <Buoy />
      <Lighthouse x={x} y={y} />
    </div>
  );
};
export default Midday;

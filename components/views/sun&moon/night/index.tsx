import React from "react";
import { motion } from "framer-motion";
import Moon from "./moon";
import Beach from "./beach";
import Buoy from "./buoy";
import Lighthouse from "./lighthouse";

const Midday = ({ ...props }) => {
  return (
    <div {...props}>
      <Moon />
      <Beach />
      <Buoy />
      <Lighthouse />
    </div>
  );
};
export default Midday;

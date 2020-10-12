import React from "react";
import { motion } from "framer-motion";
import Umbrella from "./umbrella";
import Beach from "./beach";
import Sun from "./sun";
import Boat from "./boat";

const Midday = ({ x, y }) => {
  return (
    <>
      <Sun x={x} y={y} />
      <Beach />
      <Umbrella x={x} y={y} />
      <Boat />
    </>
  );
};
export default Midday;

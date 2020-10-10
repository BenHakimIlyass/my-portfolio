import styled from "styled-components";
import { motion } from "framer-motion";

const Playground = styled(motion.div)`
  overflow: hidden;
  height: fit-content;
  padding: 10px 0px;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 0px 16px rgba(152, 163, 183, 0.24);
`;

export default Playground;

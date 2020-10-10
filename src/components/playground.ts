import styled from "styled-components";
import { motion } from "framer-motion";

const Playground = styled(motion.div)`
  overflow: hidden;
  height: 90vh;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  position: relative;
  margin: 0px auto;
  box-shadow: 0px 0px 16px rgba(152, 163, 183, 0.24);
`;

export default Playground;

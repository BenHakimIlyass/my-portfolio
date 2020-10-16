import { motion } from "framer-motion";
const variants = (delay) => ({
  full: {
    transition: { staggerChildren: 0.05, delayChildren: delay },
  },
  empty: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
});
const itemsVariants = {
  full: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  empty: {
    y: 100,
    opacity: 0,

    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const varientsProps = {
  variants: variants(0),
  initial: "empty",
  animate: "full",
  transition: { duration: 1, delayChildren: 5 },
};
export const WrapLetter = ({ letter, delay, ...rest }) => (
  <motion.span transition={{ duration: 1, delay }} variants={itemsVariants} {...rest}>
    {letter}
  </motion.span>
);

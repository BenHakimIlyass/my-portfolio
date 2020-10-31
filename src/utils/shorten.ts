type Props = {
  x?: number;
  y?: number;
};
const isValid = (e) => (e ? e : 0);
const shorten = ({ x, y }: Props) => ({ transform: `translate3d(${isValid(x)}px ,${isValid(y)}px ,0)` });
export default shorten;

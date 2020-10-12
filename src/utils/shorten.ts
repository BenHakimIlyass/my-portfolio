const init = (value) => ({
  x: { transform: `translate3d(${value}px,0,0)` },
  y: { transform: `translate3d(0,${value}px,0)` },
  xy: { transform: `translate3d(${value.x}px,${value.y}px,0)` },
});
type Props = {
  x?: number;
  y?: number;
};
const shorten = ({ x, y }: Props) => {
  if (!x && !y) return;
  if (x && y) return init({ x, y }).xy;
  if (x) return init(x).x;
  if (y) return init(y).y;
};
export default shorten;

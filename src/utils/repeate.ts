const repeate = (style: string, times: number) => {
  const arr = new Array(times).fill(style);
  return arr.toString();
};
export default repeate;

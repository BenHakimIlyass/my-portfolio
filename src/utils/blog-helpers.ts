export const wrapBody = (
  element,
): { clone: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "smallP"; isSemiBold?: boolean; [key: string]: any } | null => {
  const has = (prop) => element.hasOwnProperty(prop);
  const wrapProps = (e, props) => (has(e) ? { clone: e, as: e, ...props } : null);
  return (
    wrapProps("h1", { isSemiBold: true }) ||
    wrapProps("h2", { isSemiBold: true }) ||
    wrapProps("h3", { isSemiBold: true }) ||
    wrapProps("h4", { isSemiBold: true }) ||
    wrapProps("h5", { isSemiBold: true }) ||
    wrapProps("p", {}) ||
    wrapProps("i", { fontSize: "italic", clone: "p", color: "gray" })
  );
};
export const handleReadtime = (body) => {
  const prepareData = (arr) => arr.filter((element) => element !== undefined);
  const lengthCalc = (arr) => arr.reduce((a, b) => a + b, 0);

  const arr = body.map((element) => {
    const elementIsValid = wrapBody(element);
    if (elementIsValid) return element[wrapBody(element).as].length;
    else if (element.hasOwnProperty("code")) return element.code.length;
    else if (element.hasOwnProperty("quote")) return element.quote.length;
    else if (element.hasOwnProperty("bulleted")) return element.bulleted.length;
    else return;
  });
  const readtime = Math.floor(lengthCalc(prepareData(arr)) / 209);
  return readtime >= 1 ? readtime : 1;
};

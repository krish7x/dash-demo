export default (obj: object, keysToOmit: Array<string>) => {
  const result = {};
  for (const key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

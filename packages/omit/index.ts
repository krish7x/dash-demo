export default (obj, keysToOmit) => {
  const result = {};
  for (const key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

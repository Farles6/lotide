const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;

const middle = array => {
  let newArr = [];
  if (array.length <= 2) {
    return newArr;
  } else if (array.length % 2 !== 0) {
    newArr.push(array[Math.floor(array.length / 2)]);
  } else {
    newArr.push(array[Math.floor((array.length - 1) / 2)]);
    newArr.push(array[Math.floor(array.length / 2)]);
  }
  return newArr;
};

module.exports = middle;
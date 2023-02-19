const validate = {
  count: (item) => {
    item = parseInt(item);
    if (item && item > 0 && item < 11) return true;
    else return false;
  },
  time: (item) => {
    if (item) return true;
    else return false;
  },
};
export default validate;

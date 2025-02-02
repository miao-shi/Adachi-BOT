exports.randomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

exports.hasKey = (obj, level, ...rest) => {
  if (obj === undefined) {
    return false;
  }
  if (rest.length == 0 && obj.hasOwnProperty(level)) {
    return true;
  }

  return exports.hasKey(obj[level], ...rest);
};

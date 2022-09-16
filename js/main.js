const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  else {
    const rand = Math.ceil(min) + Math.floor(Math.random() * (Math.floor(max) + 1 - Math.ceil(min)));
    return rand;
  }
};
getRandomInteger(-0.35, 2.38);

const getLineLength = (line, maxLength) => {
  if (line.length >= maxLength) {
    return false;
  }
  else {
    return true;
  }
};
getLineLength('у э', 5);

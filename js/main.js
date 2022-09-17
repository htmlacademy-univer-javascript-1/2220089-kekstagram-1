const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return -1;
  }
  if (max < min){
    const rand = Math.ceil(max) + Math.floor(Math.random() * (Math.floor(min) + 1 - Math.ceil(max)));
    return rand;
  }
  else {
    const rand = Math.ceil(min) + Math.floor(Math.random() * (Math.floor(max) + 1 - Math.ceil(min)));
    return rand;
  }
};

const getLineLength = (line, maxLength) => {
  if (line.length >= maxLength) {
    return false;
  }
  else {
    return true;
  }
};

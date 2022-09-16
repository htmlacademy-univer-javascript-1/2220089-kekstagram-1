const randomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Используйте только положительные числа';
  }
  else {
    const rand = Math.ceil(min) + Math.floor(Math.random() * (Math.floor(max) + 1 - Math.ceil(min)));
    return rand;
  }
};
randomInteger(-0.35, 2.38);


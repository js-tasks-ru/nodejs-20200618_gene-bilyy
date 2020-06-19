function sum(a, b) {
  /* ваш код */
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('entered value is not a number');
  }
  return a + b;
}

module.exports = sum;

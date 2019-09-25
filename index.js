module.exports = function tiny(inputString) {
  if (typeof inputString !== 'string') throw new TypeError('Tiny wants a string!');
  return inputString.replace(/\s/g, '');
}
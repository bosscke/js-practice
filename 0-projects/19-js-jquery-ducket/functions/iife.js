// Immediatelly invoked functions expressions (IIFE)
var area = (function () {
  let width = 3;
  let height = 2;
  return width * height;
})();
console.log(area);

const calc = () => {
  return 4 * 3;
};

//Callback -- function called inside a function

const printCalc = (callback) => {
  console.log(callback());
};

printCalc(calc);

// Tip Calculator

const tipCalculator = (sum, percent, currency, prefix) => {
  //   let sum = 27.43;
  //   let percent = 22;
  let tip = sum * (percent / 100);
  let total = sum + tip;
  if (prefix) {
    return console.log(`
    Bill:        ${sum}${currency}
    Tip:         ${percent}%
    Tip:         ${tip.toFixed(2)}${currency}
    Total:.......${total.toFixed(2)}${currency}
    `);
  } else {
    return console.log(`
        Bill:      ${currency}${sum}
        Tip:         ${percent}%
        Tip:         ${currency}${tip.toFixed(2)}
        Total:.......${currency}${total.toFixed(2)}
        `);
  }
};

tipCalculator(19, 8, "€", true);

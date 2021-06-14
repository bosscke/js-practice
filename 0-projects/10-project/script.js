// Tip Calculator

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percent, locale, currency) => {
  //   let sum = 27.43;
  //   let percent = 22;
  let tip = sum * (percent / 100);
  let total = sum + tip;

  console.log(`
      Bill:        ${formatter(locale, currency, sum)}
      Tip:         ${percent}%
      Tip:         ${formatter(locale, currency, tip)}
      Total:.......${formatter(locale, currency, total)}
      `);
};

tipCalculator(800, 8, "cz-CZ", "CZK");

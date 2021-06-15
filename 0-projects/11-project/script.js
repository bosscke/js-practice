// Tip Calculator

// Hlper function to format currency numbers, used by the calculator.
const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

// Callback

const printHTML = (waiterTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
   
            <tr>
                <td>Bill: </td>
                <td>${waiterTip.sum}</td>
            </tr>
            <tr>
                <td>Tip %:</td>
                <td>${waiterTip.percent}</td>
            </tr>
            <tr>
                <td>Tip:</td>
                <td>${waiterTip.tip}</td>
            </tr>
            <tr>
                <td>Total: . . . . . . . . .</td>
                <td>${waiterTip.total}</td>
            </tr>
    `;
  document.querySelector("main").append(tipTable);
};

// Tip Calculator

const tipCalculator = (sum, percent, locale, currency, callback) => {
  //   let sum = 27.43;
  //   let percent = 22;
  let tip = sum * (percent / 100);
  let total = sum + tip;

  const waiterTip = {
    sum: formatter(locale, currency, sum),
    percent: percent + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };
  callback(waiterTip);
};

tipCalculator(16, 9, "bs-BA", "BAM", printHTML);

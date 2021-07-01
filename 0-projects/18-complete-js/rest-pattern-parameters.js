// Rest Pattern and Parameters

const restaurant = {
  name: "La Pomodoro",
  location: "Freedom Square 2, Brno, Czech Republic",
  categories: ["Pizzeria", "Pastaria"],
  starterMenu: ["Focaccia", "Bruschetta"],
  mainMenu: ["Quattro Formaggi", "Margherita", "Pasta Frutti di Mare"],
  openinHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      open: 9,
      close: 22,
    },
    sat: {
      open: 13,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// 1)DESTRUCTURING

//SPREAD -> because on the RIGHT side of the equal sign =
const arr = [1, 2, [55, 98]];
console.log(...arr);

const arr1 = [1, 2, ...[55, 98]];
console.log(...arr1);

//REST -> because on the LEFT side
const [a, b, ...others] = [1, 2, 4, 77, 8];
console.log(a, b, others);

const [pizza, ...food] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, food);

// Objects
const { sat, ...weekdays } = restaurant.openinHours;
console.log(weekdays);

// 2) FUNCTIONS

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

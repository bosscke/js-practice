// Destructuring arrays

"use strict";

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
    wed: {
      open: 13,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //returning an array
  },
};

const [starter, main] = restaurant.order(1, 2);
console.log(starter, main);

// The Nullish Coalescing Operator

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
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

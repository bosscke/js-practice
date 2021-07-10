// Short Circuiting (&& and ||)
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

//Use ANY data type, return any data type
console.log("---- OR ----");
console.log(3 || "Hans");
console.log("" || "Hans");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 77 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Hans");
console.log(22 && "Hans");
console.log("Hello" && 23 && null && "Hans");

//Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

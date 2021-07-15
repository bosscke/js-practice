// Objects
//Literal Notation
let hotel = {
  name: "Las Vegas",
  rooms: 100,
  booked: 45,
  pool: true,
  roomTypes: ["twin", "double", "suite"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

let hotelName = hotel.name;
console.log(hotelName);
let roomsFree = hotel.checkAvailability();
console.log(roomsFree);

// Object
// Constructor Notation

let hotel1 = new Object();

hotel1.name = "Babba";
hotel1.rooms = 25;
hotel1.booked = 11;

hotel1.checkAvailability = function () {
  return this.rooms - this.booked;
};

console.log(hotel1.name);
delete hotel1.name;
console.log(hotel1.name);
hotel1.name = "Starra";
console.log(hotel1.name);

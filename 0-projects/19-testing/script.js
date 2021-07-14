// Objects

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

//

//    Assignment
// We sppose products of array is as 
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 35000,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 102,
    title: "Sony LED 43 inch 102",
    quantity: 3,
    price: 40000,
    status: false,
    colors: ["red"]
  },
  {
    id: 103,
    title: "Sony LED 51 inch 103",
    quantity: 2,
    price: 45000,
    status: true,
    colors: ["red", "black"]
  },
  {
    id: 104,
    title: "Sony LED 55 inch 101",
    quantity: 5,
    price: 50003,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 105,
    title: "Sony LED 27 inch 102",
    quantity: 3,
    price: 50000,
    status: false,
    colors: ["red"]
  },
  {
    id: 106,
    title: "Sony LED 40 inch 103",
    quantity: 2,
    price: 35001,
    status: true,
    colors: ["red", "black"]
  }
]

// 1- Add 16% tax on each product price and then offer 10% discount on price.

// let taxPrice = function (products) {
//   let originalPrice = products.map(p => p.price)
//   console.log("original price", originalPrice);

//   let afterTax = originalPrice.map(p => p += (16 / 100) * p)
//   console.log("Price after 16% tax",afterTax);

//   let discPrice = afterTax.map(dp => dp -= (dp/100) * 10);
//   console.log("price after 10% discount",discPrice);

// }
// taxPrice(products);


// 2- Show all the LED whose price is in the range of 30K to 40K.

// let ledDisplay = function (products) {
//   let titles = products.filter(led => led.price >= 30000 && led.price <=40000).map(titl => titl.price);
//   console.log(titles);
// }
// ledDisplay(products);


// 3- Find the sum of all products whose price is odd number using reduce function. 


// let findODD = products.filter(t => t.price % 2 != 0).map(t => t.price);
// let sum = findODD.reduce((acc,res) => acc + res);

// console.log(findODD);
// console.log(sum);

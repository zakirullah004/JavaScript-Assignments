//                    Assignment
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

// let originalPrice = products.map(p => p.price)
// console.log("original price", originalPrice);

// let pricewithTax = products.map(prds => prds.price += (prds.price / 100) * 16);
// console.log("prices with tax", pricewithTax);

// let pricewithDisc = pricewithTax.map(prds => prds -= (prds / 100) * 10);
// console.log("prices with discount on tax", pricewithDisc);

// 2- Show all the LED whose price is in the range of 30K to 40K.

// let showLed = (products) => {
//   let finalProducts = products.filter(prd => prd.price>=30000 && prd.price<=40000).map(prdTitle => prdTitle.title);
//   console.log(finalProducts);
// }
// showLed(products);

// 3- Find the sum of all products whose price is odd number using reduce function. 

// let sumofProducts = (products) => {
//   let oddPrice = products.filter(prdPrice => prdPrice.price%2 !== 0).map(p => p.price);
//   let sum = oddPrice.reduce((pre,cur) => pre + cur)
//   return sum
// }
// console.log(sumofProducts(products));



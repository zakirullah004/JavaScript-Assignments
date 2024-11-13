//                    Assignment
// We suppose poducts array as
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    varations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 45000, quantity: 1 },
      { id: 3, color: "silver", price: 40000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    varations: [
      { id: 1, color: "black", price: 45000, quantity: 5 },
      { id: 2, color: "red", price: 40000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    varations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

//! 1- For each product print the variation having minimum
// Find the variation with the minimum price for each product


// const minimumProducts = (products) => {
//   return products.map(product => {
//     let minVariation = product.varations.reduce((min, variation) =>
//       variation.price < min.price ? variation : min
//     );
//     return minVariation;
//   });
// };


let minimumProducts = products.map(prds => prds.varations.reduce((preVal,currVal) => preVal.price < currVal.price ? preVal : currVal))
console.log(minimumProducts);


// sample output
// [
//   { id: 3, color: 'silver', price: 40000, quantity: 8 },
//   { id: 2, color: 'red', price: 40000, quantity: 1 },
//   { id: 2, color: 'red', price: 50000, quantity: 1 }
// ]

//! 2- Count the number of reviews on each product.

// const numberofReviews = (products) =>{  
//   let Reviews = products.map(p => {
//     console.log(p.title);
//     return p.reviews.length
//   })
//   return Reviews
// }
// console.log(numberofReviews(products));

//! 3- Count the average rating of each product.

// const avgRating = (products) => {
//   let countReviews = products.map(prdReview => prdReview.reviews.map(prdRating => prdRating.rating).reduce((pre,res) => (pre + res)) / prdReview.reviews.length);
//   return countReviews
// }
// console.log(avgRating(products));

//! 4- In each product show reviews that need to be moderated (status = false) along with id and title only
// meanseach product will have id, title and array of unmoderated reviews.

// let FalsyReviews = products.map(prdReviews => {
//   return {
//     id:prdReviews.id,
//     title:prdReviews.title,
//     reviews:prdReviews.reviews.filter(review => !review.status)
//   }
// });
// console.log(FalsyReviews);

// sample output
// [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     reviews: [
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//     ],
//   },
// ];

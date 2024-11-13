//     Assignment
// Consider the following product object
let product1 = {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 50000,
    status: true
};

// 1- Copy all the properties of product1 into product2 and change the price & status.

// let product2 = {...product1};
// product2.price = 45000;
// product2.status = false;
      //? OR
// let product2 = {...product1, price:45000 , status:false};
// console.log(product2);


// 2- Destucture title & price of product1 and the remaining properties in others object.

// let {title,price,...rest} = product1;
// console.log(title);
// console.log(price);
// console.log(rest);


// 3- Add some two properties in product1 dynamically.



// 4- increase all number type properties of product1 by 10% using map.


// for (let key in product1) {
//     if (typeof product1[key] === 'number') {
//         product1[key] *= 1.1;
//        product1[key] = Number(product1[key].toFixed(2));
//     }
// }

// console.log(product1);



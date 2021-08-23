const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
//loop through with object and out in the array
//return every element
const product = products.map(product => product);
console.log(product);
const productNames = products.map(product => product.name);
const productColor = products.map(product => product.color);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
// console.log(productNames,productColor,productPrices);
//using forEach to get the every element
//Not return element
products.forEach(product => console.log(product));
// console.log(productPrices);
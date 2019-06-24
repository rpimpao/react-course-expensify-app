// const person = {
//   name: "Rodrigo",
//   age: 24,
//   location: {
//     city: 'London',
//     temp: 12
//   }
// };

// //const name = person.name;
// //const age = person.age;

// const {name = "Anonymous", age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Bla',
//   author: 'Huezero Br',
//   publisher: {
//     name: 'teuPai'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(`${publisherName}`);


// Array destructuring
// const address = ["77 Vicarage", "London", "England", "TW34NN"];

// const [, city, country] = address;

// console.log(`You are in ${city} ${country}.`)

const item = ['Cofee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`Medium ${itemName} is ${mediumPrice}`);
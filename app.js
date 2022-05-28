// start with strings, numbers and booleans
let age = 1000;
let age2 = age; // Strings, númeroes e booleans copiam o valor propriamente dito.
console.log(age, age2);
age = 2000;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'Voilá';
console.log(name, name2);

let isTrue = true;
let isTrue2 = isTrue;
console.log(isTrue, isTrue2);
isTrue = false;
console.log(isTrue, isTrue2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const players2 = players; // Referencia para um mesmo endereço de memória.

console.log(players, players2);

// You might think we can just do something like this:
players2[3] = 'Lux'; // Se eu alterar uma das Arrays, ambas serão modificadas.
console.log(players, players2);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const players3 = players.slice();

// one way

// or create a new array and concat the old one in
const players4 = [].concat(players);

// or use the new ES6 Spread
const players5 = [...players];
const players6 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
};

// and think we make a copy:
const person2 = person; // Assim como as Arrays, cria-se uma referencia.
person.number = 99;

// how do we take a copy instead?
const person3 = Object.assign({}, person, {
    number: 100,
    age: 12
});
console.log(person, person3);
// We will hopefully soon see the object ...spread
const person4 = {
    ...person
};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: '@wesbox',
        facebook: 'wesbox.dev',
    },
};

const dev = Object.assign({}, wes);

dev.social.twitter = '@coolman';
console.log(dev.social, wes.social); // O valor foi alterado em ambos objetos. Ou seja, em apenas um nivel de profundidade é possível copiar o valor exato. Para alterar um objeto cópiado sem influenciar no objeto original para além de 1nv de profundidade, necessita-se de uma função à parte.

dev2 = JSON.parse(JSON.stringify(wes)); // Primeiramente torna uma string (JSON.stringfy), e imediatamente transforma em um novo objeto (JSON.parse). Não recomendado, mas funciona..
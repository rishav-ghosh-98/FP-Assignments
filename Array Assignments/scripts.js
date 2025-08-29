const nums = [5, 10, 15, 20];
const totalSums = nums.reduce((acc,curr) => acc + curr, 0);
console.log(totalSums);

const nums1 = [2, 3, 4];
const product = nums1.reduce((acc,curr) => acc*curr,1);
console.log(product);

const scores = [80, 90, 70, 100];
const totalScore = scores.reduce((acc,curr) => 
acc + curr
,0)
const avgScore = totalScore/scores.length
console.log(avgScore)

const nested = [[1, 2], [3, 4], [5]];
const flatArr = nested.reduce((acc,curr)=> {
    acc.push(...curr);
    return acc;
},[])
console.log(flatArr);

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];

const filterNames = users.reduce((acc,curr) => {
    acc.push(curr.name);
    return acc
},[]);
console.log(filterNames);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const filterFruits = fruits.reduce((acc,curr)=> {acc[curr] = (acc[curr] || 0)+1;
    return acc;
}
,{})
console.log(filterFruits);

const pets = [
  { name: 'Spot', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rover', type: 'dog' },
  { name: 'Whiskers', type: 'cat' }
];

// expected result:
// {
//   dog: [ { name: 'Spot', type: 'dog' }, { name: 'Rover', type: 'dog' } ],
//   cat: [ { name: 'Mittens', type: 'cat' }, { name: 'Whiskers', type: 'cat' } ]
// }

const filterPets = pets.reduce(
  (acc, curr) => {
    !acc[curr.type] ? acc[curr.type] = [] :  acc[curr.type].push(curr);
  return acc
},
  [{}]
);
console.log(filterPets)

const products = [
  { sku: 'A123', name: 'Socks', price: 5 },
  { sku: 'B456', name: 'Hat', price: 15 }
];

// expected result:
// {
//   A123: { sku: 'A123', name: 'Socks', price: 5 },
//   B456: { sku: 'B456', name: 'Hat', price: 15 }
// }

const filterProducts = products.reduce((acc,curr) => {
    acc[curr.sku] = curr
    return acc
},{})
console.log(filterProducts)

const votes = [
  'Alice', 'Bob', 'Alice', 'Carol',
  'Bob', 'Alice', 'Carol', 'Bob'
];
// expected result:
// { Alice: 3, Bob: 3, Carol: 2 }

const countVotes = votes.reduce((acc,curr) => {acc[curr] = (acc[curr] || 0)+1
    return acc;
},{})
console.log(countVotes)

const pets1  = [
  { name: 'Fido', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rex', type: 'dog' },
  { name: 'Whiskers', type: 'cat' },
  { name: 'Goldie', type: 'fish' }
];

// expected result:
// { dog: 2, cat: 2, fish: 1 }

const filterPetsTypes = pets1.reduce((acc,curr)=> {
    acc[curr.type]  = (acc[curr.type] || 0) + 1;
    return acc;
},{})
console.log(filterPetsTypes)

const sales = [
	{ region: 'North', amount: 100 },
	{ region: 'South', amount:  80 },
	{ region: 'North', amount: 120 },
	{ region: 'East',  amount:  75 },
	{ region: 'South', amount:  20 }
]

// expected result:
// { North: 220, South: 100, East: 75 }
const filterSales = sales.reduce((acc,curr) => {
    acc[curr.region] = (acc[curr.region] || 0) + curr.amount;
    return acc;
},{})
console.log(filterSales)

const str =  'mississippi';
// expected result:
// { m: 1, i: 4, s: 4, p: 2 }|
let obj ={}
for(let i = 0; i<str.length;i++){
    let char = str[i]
    if (obj[char]){
        obj[char] += 1;
    }else{
        obj[char] = 1;
    }
}
console.log(obj)
const filterChar = str.split('').reduce((acc,curr) => {
  acc[curr] = (acc[curr]  || 0)+ 1  ;
  return acc;
},{})
console.log(filterChar)

const users1 = [
  { name: 'Anjali', active: true },
  { name: 'Raj', active: false },
  { name: 'Meena', active: true }
];

// Expected Output
["Anjali", "Meena"]

const activeUsers = users1.reduce((acc,curr) => {curr.active = true ? acc.push(curr.name) : acc;
    return acc
},[]);
console.log(activeUsers)

const participation = [
  { name: 'Rahul', hours: 6 },
  { name: 'Neha', hours: 4 },
  { name: 'Ankit', hours: 3 },
  { name: 'Rahul', hours: 5 },
  { name: 'Neha', hours: 2 },
  { name: 'Anjali', hours: 9 }
];

// Expected Output:
// {
//   Rahul: 11,
//   Anjali: 9
// }


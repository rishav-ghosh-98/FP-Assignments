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
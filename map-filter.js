// to spuare values
const numbers = [3, 4, 5, 8, 9];
const output = [];
for(let i=0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
// console.log(output);
// console.log(numbers.length);

// map er vitore function e nicher 3 ta parameter e nite pare, or jekono 1 tao use kora jay
// const result = numbers.map(function(element, index, array){
//     console.log(element, index, array);    
// })

// map uporer for loop ta k 2 line e niye asche
// const result = numbers.map(x => x * x);
// console.log(result);

//  filter use kore ekta condition use kore oitar reulst ta bachai kore niye ashar jonno
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

// Find: similar to filter, output e only 1ta element show korbe, 1st jei element ta condition match korbe seitai show kore dibe, further ar aagabe na
const isThere = numbers.find(x => x > 5);
console.log(isThere);
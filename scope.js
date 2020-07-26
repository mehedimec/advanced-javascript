let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    if (result > 10){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3, 9);
// console.log(output);

// hoisting
//console.log(day);  // result undeined ashbe karon day ta ei line er purbe defined kora hooy nai. er niche ase.
var day = "Sunday"; 
var day = "Sunday";
console.log(day); 
//Truthy and Falsy values

// below are false condition :
// 0
// undefiend
// null
// NaN
// false


// below are true condition :
// '0', ' '; []; 
// any string 
const age = 0;
if (age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// const name = "Salman";
let name = " ";
console.log(name);
if (name.length > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
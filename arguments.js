function add(num1, num2){
    // console.log(...arguments);
    console.log([...arguments]);   // [] use kore array banay fellam
    return num1 + num2 + arguments[2];
}
result = add(2, 3, 5, 7);
console.log(result);
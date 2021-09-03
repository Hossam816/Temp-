


/*function showDetail(a, b, c){
 let info = [a, b, c],
    name,
    age,
    avaliability,
    sentence;

    for(i = 0; i < info.length; i++){
        typeof info[i] === 'string'
        ?(name = info[i])
        :typeof info[i] === 'number'
        ?(age = info[i])
        :typeof info[i] === 'boolean'
        ?(avaliability = info[i])
        :"incorrect data type";
    }
    avaliability === true
        ?(sentence = "you are avaliable for hire")
        :(sentence = "you are not avaliable for hire");

        console.log(`Hello ${name}, Your age is ${age}, ${sentence}`);
}
showDetail("osama", 38, true);
showDetail(38, "osama", true);
showDetail(true, 38, "osama");
showDetail(false, 38, "osama");*/

// Challenge #1 
/*let names1 = function(...names){
    return `String[${names.join("],[")}] => Done!`;
}

console.log(names1("Sajed", "Hameed", "Ameer", "Osama"));

let names2 = (...names) =>{
    return `String[${names.join("],[")}] => Done!`;
}
console.log(names2("Sajed", "Hameed", "Ameer", "Osama"))
console.log("#".repeat(15))
console.log("#".repeat(15))
console.log("#".repeat(15))


let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => {
    let result = 0;
    for(i = 0;i < myNumbers.length; i++){
        result += myNumbers[i];
    }
    return result - one - two;
}


console.log(calc(10, myNumbers[1], myNumbers));*/


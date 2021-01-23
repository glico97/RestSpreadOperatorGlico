// 1 question
// console.log(numPlanets); = 8
// console.log(yearNeptuneDiscovered); = 1846;

//question 2
// console.log(discoveryyears); = yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

// question 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// question 4
// Maya
// Marisa
// Chi

// question 5
// raindrops on roses
// whiskers on kittens
//bright copper kettles, warm woolen mittens, brown paper packages tied up with strings

// question 6
// [10,30,20]

// assign variables to object properties
const obj = {
    numbers: {
        a:1,
        b:2
    }
};
const [a,b] = obj.numbers;
// array swap
[arr[0], arr[1]] = [arr[1], arr[0]];

// race result
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, ssecond, third, ...rest]) => ({first, second, third, rest})
// filter ods function that takes a variable number of arguments
const filterodds = (...args) => args.filter(v => v % 2 === 0);
// find min
const findMind = (...args) => Math.min(...args);
// merge objects
const mergeObj = (obj1, obj2) => ({...obj1, ...obj2});
// double and return args
const doubleReturn = (arr, ...args) => [...arr, ...args.map(v => v*2)];

// slice and dice

const removeRandom = items => {
    let index = math.floor(math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}
// return a new array with every item in array1 and array2 
const extraArray = (array1, array2) => {
    return [...array1, ...array2];
}

// return a new object with all the keys and values from obj

const addKeys = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

// combine two objects and return new object

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
// return new object with a modified key and value
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
console.log('connected...')

//Part 1

//Step 1
let myArray = [2,3,4,5,6]
let myString = 'Hello'

const empty = function(arr) {
    if(myArray === undefined || myArray.length == 0) {
        console.log('Array is empty')
    } else {
        console.log('Array is not empty')
    }
}
empty(myArray);

//Step 2
const overwrite = function(arr, value) {
    for ( i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr
}

//console.log(overwrite(myArray, myString))

//Step 3
const joinArr = function(arr) {
    let joinedArray = arr.join(', ')
    return joinedArray
}
console.log(`"${joinArr(myArray)}"`);

//Part 2

//Step 1
const removeElm = function(arr) {
    let removeElement = arr.splice(arr.length -2, 1)
    return arr
}
console.log(removeElm(myArray))

//step 2
let alpha = [2,3,4,5,6,]
let beta = [14,24,34,36,34]

const concat = function(arr) {
    let copyValues = arr.push.apply(alpha, beta)
    return arr
}

console.log(concat(alpha, beta))




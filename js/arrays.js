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
let joinedArray = myArray.join(', ')

console.log(joinedArray)

//Part 2

//Step 1

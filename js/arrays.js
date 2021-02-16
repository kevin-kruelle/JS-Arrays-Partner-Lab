console.log('connected...')

let myArray = [2,3,4,5,6]

const empty = function(arr) {
    if(myArray === undefined || myArray.length == 0) {
        console.log('Array is empty')
    } else {
        console.log('Array is not empty')
    }
}
empty(myArray);
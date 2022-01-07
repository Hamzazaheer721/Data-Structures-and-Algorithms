let ascendingOrder = (a, b) => a - b
let descendingOrder = (a, b) => b - a

let stringAscendingOrder = (a, b) => a.length - b.length
let stringDescendingOrder = (a, b) => b.length - a.length

let array1 = [21, 29, 20, 23, 25]
let array2 = ['ab', 'a', 'abc', 'abcde', 'abcd']

array1.sort(ascendingOrder)
console.log(array1) // [20, 21, 23, 25, 29]

array1.sort(descendingOrder)
console.log(array1) // [29, 25, 23, 21, 20]

array2.sort(stringAscendingOrder)
console.log(array2) // [ 'a', 'ab', 'abc', 'abcd', 'abcde' ]

array2.sort(stringDescendingOrder)
console.log(array2) // [ 'abcde', 'abcd', 'abc', 'ab', 'a' ]

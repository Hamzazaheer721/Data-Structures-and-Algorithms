/* Naive solutions */
const sameFunc = (arrOne: number[], arrTwo: number[]): boolean => {
  let res: boolean = false
  if (arrOne.length !== arrTwo.length) return res
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo[i] !== Math.pow(arrOne[i], 2)) {
      res = false
      break
    }
    res = true
  }
  return res
}

let array1 = [1, 2, 3, 4]
let array2 = [1, 4, 9, 16]

console.log(`Result: ${sameFunc(array1, array2)}`)

const sameFunc_ = (arrOne: number[], arrTwo: number[]): boolean => {
  let res: boolean = false
  if (arrOne.length !== arrTwo.length) return res
  for (let i = 0; i < arrOne.length; i++) {
    if (i > 0 && !res) break
    res = !!arrTwo.find((v) => v === Math.pow(arrOne[i], 2))
  }
  return res
}

const sameFuncConcise = (arrOne: number[], arrTwo: number[]): boolean => {
  if (arrOne.length !== arrTwo.length) return false
  for (let i = 0; i < arrOne.length; i++) {
    let arr_index = arrTwo.indexOf(arrOne[i] ** 2)
    if (arr_index === -1) return false
    arrTwo.splice(arr_index, 1) //shorten the array with every successful result
  }
  return true
}

///////////////////////////////////////
////////// FREQUENCY COUNTER /////////
/////////////////////////////////////

const sameOptimized = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false
  const frq1 = {}
  const frq2 = {}
  for (let val of arr1) {
    frq1[val] = (frq1[val] || 0) + 1
  }
  for (let val of arr2) {
    frq2[val] = (frq2[val] || 0) + 1
  }
  for (let key in frq1) {
    let _key: number = Number(key)
    if (!frq2.hasOwnProperty(Number(_key) ** 2)) {
      return false
    }
    if (frq2[_key] !== frq1[_key ** 2]) {
      return false
    }
  }
  return true
}

array1 = [1, 2, 3, 1, 5]
array2 = [9, 1, 1, 25, 4]
let _array2 = [9, 1, 4, 25, 1]

console.log(`Result: ${sameFunc_(array1, array2)}`)
console.log(`Result: ${sameFuncConcise(array1, array2)}`)
console.log(`Result: ${sameOptimized(array1, _array2)}`)

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

array1 = [1, 2, 3, 5]
array2 = [9, 1, 25, 4]

console.log(`Result: ${sameFunc_(array1, array2)}`)

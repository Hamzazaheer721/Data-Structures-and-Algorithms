const bubbleSortAsc = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // shortend for swapping in ES2015 => ES6
      }
    }
  }
  return arr
}

const bubbleSortAsc_1 = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // shortend for swapping in ES2015 => ES6
      }
    }
  }
  return arr
}

const bubbleSortAsc_2 = (arr: number[]): number[] => {
  const swap = (_arr: typeof arr, indexOne: number, indexTwo: number) => {
    return ([_arr[indexOne], _arr[indexTwo]] = [_arr[indexTwo], _arr[indexOne]])
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}

const bubbleSortWithNoSwap = (arr: number[]): number[] => {
  let noswap: boolean = false
  for (let i = arr.length; i > 0; i--) {
    noswap = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noswap = false
      }
    }
    if (noswap) break
  }
  return arr
}

let t1 = performance.now()
console.log(bubbleSortAsc([4, 2, 6, 1, 7]))
let t2 = performance.now()
console.log(`time: ${(t2 - t1) / 1000}`)

t1 = performance.now()
console.log(bubbleSortAsc_1([4, 2, 6, 1, 7]))
t2 = performance.now()
console.log(`time: ${(t2 - t1) / 1000}`)

t1 = performance.now()
console.log(bubbleSortAsc_2([4, 2, 6, 1, 7]))
t2 = performance.now()
console.log(`time: ${(t2 - t1) / 1000}`)

t1 = performance.now()
console.log(bubbleSortWithNoSwap([4, 2, 6, 1, 7]))
t2 = performance.now()
console.log(`time: ${(t2 - t1) / 1000}`)

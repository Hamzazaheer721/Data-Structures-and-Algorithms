/////// Bubble Sort //////

/* We do iteration on outerloop */

const arr1 = [1, 3, 5, 6, 2, 7, 9, 8]
const arr2 = [1, 3, 5, 6, 2, 7, 9, 8]
const arr3 = [1, 3, 5, 6, 2, 7, 9, 8]

const swapArray = <T>(arr: T, first: number, second: number): typeof arr => {
  ;[arr[first], arr[second]] = [arr[second], arr[first]]
  return arr
}

const bubbleSort = (arr: number[]): typeof arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let swap = false
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        swap = true
        arr = swapArray<typeof arr>(arr, j, j + 1)
      }
    }
    if (!swap) break
  }
  return arr
}

console.log(bubbleSort(arr1))

const insertionSort = (arr: number[]): Array<number> => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    while (arr[j] < curr && j >= 0) {
      let index = arr.indexOf(curr)
      arr = swapArray(arr, j, index)
      j--
    }
  }
  return arr
}

console.log(insertionSort(arr2))

const selectionSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    let curr = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[curr]) {
        curr = j
      }
    }
    if (curr !== i) {
      arr = swapArray(arr, i, curr)
    }
  }
  return arr
}

console.log(selectionSort(arr3))

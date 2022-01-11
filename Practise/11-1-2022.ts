/* Bubble Sort */

const sortByBubbleSort = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

let a = sortByBubbleSort([4, 3, 6, 7, 2, 1, 23])
console.log(a)

/* Selection Sort */

/* Iterate the array */
/* At each index check if the current element is greater than first index and if it is then swap */
/* update beginning index of array and start neext iteration from there*/

const selectionSort = (arr: number[]): number[] => {
  let smallestIndex: number
  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }
    if (i !== smallestIndex) {
      ;[arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort([4, 3, 6, 7, 2, 1, 23]))

/* Insertion Sort */
const insertion_sort = (arr: number[]): number[] => {
  /* Iterate over array */
  /* compare the current array element to its predecessor */
  /* if key element is smaller than its predecessor check it against the previous one, move the greater element one position up to make space for swapped element*/
  let indexToReplace
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    while (arr[j] > arr[i] && j >= 0) {
      indexToReplace = j
      ;[arr[indexToReplace], arr[i]] = [arr[i], arr[indexToReplace]]
      j--
    }
    console.log('array: ', arr)
  }
  return arr
}

console.log(insertion_sort([4, 3, 6, 7, 2, 1, 23]))

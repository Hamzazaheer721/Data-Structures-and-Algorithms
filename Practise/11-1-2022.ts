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
  let smallest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        smallest = arr[j]
      }
    }
  }
  return arr
}

console.log(selectionSort([4, 3, 6, 7, 2, 1, 23]))

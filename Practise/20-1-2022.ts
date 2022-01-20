const bubbleSort = (arr: Array<number>) => {
  /* Iterate hte array */
  /* Compare the current array element with jth element if ith element is smaller then swap  */
  let swap: boolean
  for (let i = arr.length - 1; i > 0; i--) {
    swap = false
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        swap = true
      }
    }
    if (!swap) break
  }
  return arr
}

console.log(bubbleSort([1, 23, 4, 5, 45, 5, 2]))

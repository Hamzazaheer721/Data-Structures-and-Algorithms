const bubbleSort = (arr: Array<number>) => {
  let swap: boolean
  for (let i = arr.length; i > 0; i--) {
    swap = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swap = true
      }
    }
    if (!swap) break
  }
  return arr
}

console.log(bubbleSort([1, 23, 4, 5, 45, 5, 2]))

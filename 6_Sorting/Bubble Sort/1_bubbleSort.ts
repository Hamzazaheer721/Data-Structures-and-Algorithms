const bubbleSortAsc = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let val = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = val
      }
    }
  }
  return arr
}

console.log(bubbleSortAsc([4, 2, 6, 1, 7]))

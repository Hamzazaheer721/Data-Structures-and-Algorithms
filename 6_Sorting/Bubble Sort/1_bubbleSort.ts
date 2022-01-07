const bubbleSortAsc = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // shortend for swapping in ES2015 => ES6
      }
    }
  }
  return arr
}

console.log(bubbleSortAsc([4, 2, 6, 1, 7]))

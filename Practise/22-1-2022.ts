const insertionSortDuets = (arr: Array<number>): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > curr; j--) {
      let index = array.indexOf(curr)
      let temp = arr[index]
      arr[index] = arr[j]
      arr[j] = temp
    }
    console.log(arr)
  }
  return arr
}

const array = [3, 4, 2, 5, 8, 9, 1]

console.log(insertionSortDuets(array))

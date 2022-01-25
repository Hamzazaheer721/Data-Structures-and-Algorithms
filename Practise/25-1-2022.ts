let arr1 = [3, 7, 6, 5, 2, 4, 1]
let arr2 = [3, 7, 6, 5, 2, 4, 1]
let arr3 = [3, 7, 6, 5, 2, 4, 1]

const insertionSort = <T extends number>(arr: Array<T>) => {
  let curr
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i]
    for (let j = i - 1; arr[j] < curr && j >= 0; j--) {
      let index = arr.indexOf(curr)
      let temp = arr[j]
      arr[j] = arr[index]
      arr[index] = temp
    }
  }
  return arr
}

console.log(insertionSort(arr1)) // sorted

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swap = false
    for (let j = 0; j <= i; j++) {
      if (arr[j] < arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swap = true
      }
    }
    if (!swap) break
  }
  return arr
}

console.log(bubbleSort(arr2))

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let curr = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[curr]) {
        curr = j
      }
    }
    if (curr === i) break
    ;[arr[curr], arr[i]] = [arr[i], arr[curr]]
  }
  return arr
}

console.log(selectionSort(arr3))

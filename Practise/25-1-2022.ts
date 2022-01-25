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
  /* iterate the array */
  /* Outer loop is for no of iterations and each iteration give us one sorted element at right place */
  /* Inner loop is used for comparison with that specific element, if a[j] < a[i] then swap */
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {}
  }
  return arr
}

const selectionSort = () => {}

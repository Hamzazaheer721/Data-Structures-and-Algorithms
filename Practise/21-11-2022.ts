/* Selection sort */

/* Iterate over array */
/* Initialize curr lowest index = i */
/* Start an inner loop, which will start from i + 1 to arr.length */
/* If any element in inner loop is smaller than inner loop then curr lower index = that jth element */
/* inner for loop ends, if curr lowest elemet != arr[i]  => swap curr a[i] with curr[lowest]*/

const array: Array<number> = [23, 34, 5, 61, 25, 4]

const selectionSortDuets = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let currentLowestIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentLowestIndex]) {
        currentLowestIndex = j
      }
    }
    if (currentLowestIndex !== arr[i]) {
      ;[arr[i], arr[currentLowestIndex]] = [arr[currentLowestIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectionSortDuets(array))

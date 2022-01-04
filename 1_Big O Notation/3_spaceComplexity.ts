const sum = <T extends number>(_arr: Array<T>): number => {
  return _arr.reduce((prev, val) => {
    return prev + val
  }, 0)
}

console.log(sum([3, 3, 6, 8])) // 20

const double = <T>(arr: T[]): T[] => {
  return arr.reduce((prevVal, currVal) => {
    let _mul
    if (typeof currVal === 'number') {
      prevVal.push(2 * currVal)
    } else {
      prevVal.push(currVal)
    }
    return prevVal
  }, []) as T[]
}

console.log(double([23, 3, 3, 3])) // [46, 6, 6, 6]

const sum_ = (_arr: number[]): number => {
  let sum: number = 0
  for (let i = 0; i < _arr.length; i++) {
    sum += _arr[i]
  }
  return sum
}

console.log(sum_([3, 3, 6, 8])) // 20

// Space Complexity (Auxiliary) of sum_ is O(2) = O(1) since we have two assignments (for creation of variable only) in it

const double_ = (arr: number[]): number[] {
  let _arr: Partial<typeof arr> = [];
  for(let i = 0; i < arr.length; i++){
    _arr.push(2 * arr[i])
  }
  return _arr as typeof arr;
}

console.log(double_([1,2,3,4])) // [2,4,6,8]

// Space complexity (Auxiliary) will now be O(n) because image if we have arr = infinity then our _arr will be pushed inifinity times
// so assignment will get ignord for i = 0 and we will somehow say space complexity here is O(n)


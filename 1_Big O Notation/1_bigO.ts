const reverseString = <T extends string>(str: T) => {
  let _str: string = ''
  for (let i = str.length - 1; i >= 0; i--) {
    _str += str[i]
  }
  return _str
}

const myString = 'Hamza'
let res = reverseString(myString)
console.log(res) // azmaH

const addUpTo = (n: number) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

const addUpTo_ = (n: number) => {
  return (n * (n + 1)) / 2
}

/* Let use timing functions */
let t1 = performance.now()
console.log(addUpTo(10)) // 55
let t2 = performance.now()
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`) // 0.00061s => slower

t1 = performance.now()
console.log(addUpTo_(10)) // 55
t2 = performance.now()
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`) // 0.00011s => faster

///////////////////////////////////////////
/////////// CALCULATION OF TC ////////////
/////////////////////////////////////////

// Time Complexity of first loop is 5n + 2;
// Time Complexity of second loop is 3;

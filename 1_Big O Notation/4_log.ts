const calcLogBaseTwo = (_val: number, count = 0): number => {
  if (_val % 2 !== 0 && _val <= 1) return count
  count++
  return calcLogBaseTwo(_val / 2, count)
}

console.log(calcLogBaseTwo(25)) // 4

const logAtleast5 = (n: number) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}

const logAtMost5 = (n: number) => {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i)
  }
}

logAtMost5(7)
logAtleast5(200)

// LogAtMost => O(n)
// LogAtLeast => O(5) = O(1)

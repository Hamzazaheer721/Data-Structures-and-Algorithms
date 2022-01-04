=> BIG-O

Big o is a mathematical notation which describes the limiting behavior of function when argument tends towards
particular value.

In simple words, it tells how the runtime of function grows as inputs grow.
it is a way to describle input to function and how its growth changes the runtime of the function.
The relationship between inputsize and time relative to input.

We say that function is O(f(n)) if the number of operations that it has to do is less than constant times f(n),
as n increases.

-> f(n) could be linear (f(n) = n)
-> f(n) could be quadratic (f(n) = n^2)
-> f(n) could be constant (f(n) = 1)
-> f(n) could be something entirely different

1. === Contanst don't matter ===
   --> On bigger picture, two loops with O(2n) = O(n), we simply mean that constants don't matter e.g., O(500) = O(1)
   --> However, in nested loops, it becomes O(n^2)

2. === Smaller Terms don't matter ===
   --> O(n + 10) = O(n)
   --> O(1000n + 50) = O(n)
   --> O(n^2 + 5n + 8) = O(n^2 + n) = O(n^2) i.e., suppose n = 1000 so it is meaningless to add 10000000 + 5008

3. === Big O Shortands ===
   -> Arthematic operations are constant.
   -> Assignment operations are constant.
   -> Accessing element in any array (by index) or object (by key) is constant.
   -> In a loop, the complexity is the length of the loop times the complexity of the whatever happens inside the loop.

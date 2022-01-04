========================> BIG-O ===

Big o is a mathematical notation which describes the limiting behavior of function when argument tends towards
particular value.

In simple words, it tells how the runtime of function grows as inputs grow.
it is a way to describle input to function and how its growth changes the runtime of the function.
The relationship between inputsize and time relative to input.

We say that function is O(f(n)) if the number of operations that it has to do is less than constant times f(n),
as n increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different

1. === Contanst don't matter === -_ On bigger picture, two loops with O(2n) = O(n), we simply mean that constants don't matter e.g., O(500) = O(1) -_ However, in nested loops, it becomes O(n^2)

2. === Smaller Terms don't matter === -_ O(n + 10) = O(n) -_ O(1000n + 50) = O(n)
   -\* O(n^2 + 5n + 8) = O(n^2 + n) = O(n^2) i.e., suppose n = 1000 so it is meaningless to add 10000000 + 5008

3. === Big O Shortands ===
   - Arthematic operations are constant.
   - Assignment operations are constant.
   - Accessing element in any array (by index) or object (by key) is constant.
   - In a loop, the complexity is the length of the loop times the complexity of the whatever happens inside the loop.

========================> Space Complexity ===

1. So far we have been focusing on time complexity, how can we analyze the runtime of algo when the size of input increases?
2. We can use Big O to analyze the space complexity as well. How much additional memory do we need to allocate in order to run the code in our algo?

=== NOTE ===

Have you noticed as n grows, the size of input itself (i.e., n) grows too and we are going to ignore that part.
One might have heard about the Auxiliary Space Complexity, which is refer to space required by the algo.

=== Auxiliary Space ===

Auxiliary space is the extra space or the temporary space used bu the algo.

=== Space Complexity ===

Space Complexity = Auxiliary Space + space used by input.
Space Complexity in other words, is the total space taken by algorithm with respect to input size.
Space complexity depends on multiple things like compiler, programming language, or even the machine running the algo

=== Space Complexity in JS ===

1. Rule of thumbs
   - Most primitives (boolean, numbers, undefined, null) are constants.
   - Strings require O(n) where n is the string length.
   - Reference types are generally O(n), where n is the length of array or number of keys of object.

========================> Logarithm ===

\*. Logarithm of a number means number of times you can divide that number by 2 until you get a value that is
less than or equal to one.

log2(value) = exponent =============> 2^exponent = value
log2(8) = 3 ==============> 2^3 = 8

Like previously, we are aiming at the bigger picture so we will emit the 2.
hence log === log2

=== Who Cares ===

- Certain searching algorithms have logarithms time complexities
- Effecient sorting algorithms invole logarithms
- Recursion sometimes involves logarithmic space complexity

=== Expense Rate ===

- O(n^2) > O(nlogn) > O(n) > O(logn) > O(1)
- O(1) is the fastest and O(n^2) is the slowest

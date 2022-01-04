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

==> On bigger picture, two loops with O(2n) = O(n), we simply mean that constants don't matter
==> However, in nested loops, it becomes O(n^2)

- array.sort() doesn't work for sorting array of numbers since it sorts according to string Unicode points.
  - It means that every element in the array is converted into string unicode and then sorted accordingly
- its time and space complexity can't be guaranteed

- Solution

  - Optional Comparator function
    - Comparator looks at the pair of two elements(a,b) and sorts the result based on the value returned.
    - If the value return is negative, then a comes before b.
    - If the value return is position, then a comes after b.
    - If the value is 0, that means that a and b are same so JS sorts them together.

- Bubble Sort
  - Sorting algorithm where largest value bubbles to the top
  - visualgo.net
  - Optimization
    - What if we have an array which is almost sorted then we will have to go through the un-necessary swaps.
      - Solution
        introduce a noswap variable in each outer loop iteration and check if it is true or not if it is true then break.

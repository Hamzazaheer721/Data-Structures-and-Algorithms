1. Objects

- Objects are unordered data structures, which store data in key/value pairs
- Objects are used
  - When you don't need order
  - When you need fast access (insertion / deletion).
- Big O of objects is
  - Insertion O(1)
  - Deletion O(1)
  - Access O(1)
  - Searching O(n)
- Big O of Objects methods is
  - Object.keys O(n), since it has to got to every single key and put it in array of keys.
  - Object.values O(n)
  - Object.enteries O(n)
  - hasOwnProperty O(1)

2. Arrays

Arrays are ordered list. Order is useful thing that we have in arrays but it certainly comes at the cost of its own.

- Arrays are used when

* When you need order. However, singly linked-lists and doubly-linked lists do the same with better performance.
* When you need fast access (Insertion / Removal) but it can come at some cost.

- Big O of Arrays is

* Insertion => It depends
  - Insertion at end O(1)
  - Insertion at start O(n) => it is complicated since when we add one element at the start, every elements in array are reindexed
  - This is why adding and removing at the start is not encouraged, we should prefer push/pop over shift/unshift.
* Removal => It depends
* Searching O(n)
* Accessing Data O(1)
  - Note => accessing in js doesn't mean that to access value, js has to go through all the indices first. We have direct shortcut to it. Suppose if we have array of size 1500 and we have to access 1000th element then js will do it immediately, all we have to do is provide an index (1000) to access that value. Likewise for object as well which needs keys.

- Big O of Array Operations

* push O(1)
* pop O(1)
* shift O(n)
* unshift O(n)
* slice O(n)
* splice O(n)
* concat O(n)
* sort O(nlogn)
* for each/map/filter/reduce etc. O(n)

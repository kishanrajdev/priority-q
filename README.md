# Javascript Priority Queue implementation with comparator

## Creating an instance of a Priority Queue

```
const PriorityQueue = require('..');
const pq = new PriorityQueue([1, 0.8, 9, 15, 0.5], (a, b) => b - a);
```

the constructor takes an array as a first argument and the comparator function as the second. Both arguments are optional.

If no arguments are passed, it creates an empty min priority queue.

```
const pq = new PriorityQueue()
```

## .add() - Adding an element into the queue
It uses a comparator function to place the element in the priority queue. If the comparator function is not passed while creating an instance, it uses default one.

```
pq.add(10);
pq.add(5);
```

## .peek() - Get the first element of the queue
It returns the first element of the queue.

```
pq.peek();
```

## .poll() - removes the element from the front and returns it

```
pq.poll();
```

## .size - size of the heap

```
pq.size
```
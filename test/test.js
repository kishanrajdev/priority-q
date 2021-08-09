const assert = require('assert').strict;
const PriorityQ = require('..');

describe('PriorityQ', function() {

  it('returns a new priority queue', () => {
    assert(new PriorityQ() instanceof PriorityQ);
  });

  it('accepts a custom comparator function', () => {
    const pq = new PriorityQ([1, 0.8, 9, 15, 0.5], (a, b) => b - a);
    assert(pq instanceof PriorityQ && pq.peek() == 15);
  });
  
});

describe('Default comparator', () => {
  it('returns min priority queue with numbers', () => {
    const pq = new PriorityQ([10 , 5, 3, 11]);
    assert(pq.peek() === 3);
  });

  it('returns min priority queue with strings', () => {
    const pq = new PriorityQ(['Glow', 'Glee', 'a', 'Gland']);
    assert(pq.peek() == 'Gland');
  });
});

describe('Poll', () => {
  const pq = new PriorityQ(['Glow', 'Glee', 'a', 'Gland']);

  it('removes and returns the first element in the queue', () => {
    const pq = new PriorityQ(['Glow', 'Glee', 'a', 'Gland']);
    assert(pq.poll() == 'Gland' && pq.size === 3 && pq.peek() === 'Glee');
  });

  it('throws error when no elements in the queue', () => {
    const pq = new PriorityQ();
    assert.throws(pq.poll, Error);
  });
});

describe('Peek', () => {
  it('returns the first element of the priority queue', () => {
    const pq = new PriorityQ(['Glow', 'Glee', 'a', 'Gland']);
    assert(pq.peek() === 'Gland');
  });

  it('throws error when no elements in the queue', () => {
    const pq = new PriorityQ();
    assert.throws(pq.peek, Error);
  });
});

describe('add', () => {
  const minPq = new PriorityQ();
  const maxPq = new PriorityQ([], (a, b) => b - a);
  it('adds element in the min priority queue', () => {
    minPq.add(10);
    assert.strictEqual(minPq.size, 1);
  });

  it('adds smallest value at front in min priority queue', () => {
    minPq.add(5);
    assert.strictEqual(minPq.size, 2);
    assert.strictEqual(minPq.peek(), 5);
  });

  it('adds element in the max priority queue', () => {
    maxPq.add(10);
    assert.strictEqual(maxPq.size, 1);
  });

  it('adds smallest value at front in min priority queue', () => {
    maxPq.add(12);
    assert.strictEqual(maxPq.size, 2);
    assert.strictEqual(maxPq.peek(), 12);
  });
});

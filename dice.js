// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const pairs = {
  1: 6,
  6: 1,
  2: 5,
  5: 2,
  3: 4,
  4: 3,
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = null

  for (let i = 0; i < A.length; i ++) {
    const target = A[i]
    let sum = 0

    for (let i = 0; i < A.length; i ++) {
      const item = A[i]

      if (target !== item && pairs[target] !== item) {
        sum += 1
      }
      if (pairs[target] === item) {
        sum += 2
      }
    }

    if (result === null || result > sum) {
      result = sum
    }
    console.log('sum : ', sum)
  }
  console.log('result : ', result)
}

solution([1, 6, 2, 3])


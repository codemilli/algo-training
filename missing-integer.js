// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function hasSuccessor(target, dic) {
  let nextSmall = target
  while (dic[nextSmall + 1]) {
    nextSmall = nextSmall + 1
  }

  return nextSmall
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (Array.isArray(A)) {
    const dic = {}
    let smallest = 0
    for(let i = 0; i < A.length; i++) {
      if (A[i] < 1) {
        continue;
      }

      dic[A[i]] = true
      if (A[i] === smallest + 1) {
        smallest = hasSuccessor(smallest, dic)
      }
    }

    return smallest + 1
  } else {
    return 1
  }
}

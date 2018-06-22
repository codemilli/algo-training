// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function sortAsc(a, b) {
  return a - b
}

function getLowestTwoValueFromRest(list = []) {
  const newList = list.slice()
  newList.sort(sortAsc)

  return newList.splice(0, 2)
}

function isValid24Format(first, second) {
  if (first > 2) {
    return false
  }

  if (first === 2 && second > 4) {
    return false
  }

  return [first, second]
}

function isValid60Format(first, second) {
  if (first > 6) {
    return false
  }

  if (first === 6 && second > 0) {
    return false
  }

  return [first, second]
}

function notPossible() {
  return 'NOT POSSIBLE'
}

function getLowest(list) {
  const lowest = list.map((listOfNum, idx) => {
    return {
      idx,
      num : Number(listOfNum.join(''))
    }
  }).sort((a, b) => {
    return a.num - b.num
  })[0]

  return list[lowest.idx]
}

function printList() {
  return 'NOT POSSIBLE'
}


function solution(A, B, C, D, E, F) {
  let count = 0, possibleList = [], impossibleList = []
  // write your code in JavaScript (Node.js 8.9.4)
  const list = [A, B, C, D, E, F]
  const sortedList = list.slice().sort(sortAsc)
  let results

  sortedList.forEach((first, idx) => {
    const rest1 = sortedList.slice()
    rest1.splice(idx, 1)

    rest1.forEach((second, idx) => {
      const rest2 = rest1.slice()
      rest2.splice(idx, 1)

      rest2.forEach((third, idx) => {
        const rest3 = rest2.slice()
        rest3.splice(idx, 1)

        rest3.forEach((forth, idx) => {
          const rest4 = rest3.slice()
          rest4.splice(idx, 1)

          rest4.forEach((fifth, idx) => {
            const rest5 = rest4.slice()
            rest5.splice(idx, 1)

            rest5.forEach((sixth, idx) => {
              if (first === 2 && second === 4) {
                if (third + forth + fifth + sixth === 0) {
                  possibleList.push([first, second, third, forth, fifth, sixth])
                } else {
                  impossibleList.push([first, second, third, forth, fifth, sixth])
                }
              } else if (
                isValid24Format(first, second) &&
                isValid60Format(third, forth) &&
                isValid60Format(fifth, sixth)
              ) {
                possibleList.push([first, second, third, forth, fifth, sixth])
              } else {
                impossibleList.push([first, second, third, forth, fifth, sixth])
              }

              count++
            })
          })
        })
      })
    })
  })

  if (possibleList.length === 0) {
    return notPossible()
  }

  const t = getLowest(possibleList)
  return (`${t[0]}${t[1]}:${t[2]}${t[3]}:${t[4]}${t[5]}`)
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function isCollide(a, b) {
  return !(
    ((a.top + a.height) < (b.top)) ||
    (a.top > (b.top + b.height)) ||
    ((a.left + a.width) < b.left) ||
    (a.left > (b.left + b.width))
  )
}

function getX(str) {
  return str.substring(0, str.length - 1)
}

function getY(str) {
  return str.charAt(str.length - 1)
}

function solution(N, S, T) {
  // write your code in JavaScript (Node.js 8.9.4)
  const ships = S.split(',')
  const hits = T.split(' ')

  const shipStatusList = ships.map((ship) => {
    let hited = 0
    const [first, second] = ship.split(' ')
    const firstX = Number(getX(first)) - 1
    const firstY = getY(first).charCodeAt() - 64 - 1
    const secondX = Number(getX(second))
    const secondY = getY(second).charCodeAt() - 64
    const width = secondX - firstX
    const height = secondY - firstY
    const shipPos = {
      top: firstY,
      left: firstX,
      width,
      height
    }
    
    // console.log('secondX', getY(first).charCodeAt() - 1, getY(second).charCodeAt(), firstY, secondY)

    console.log('shipPost : ', shipPos)

    hits.forEach((hit) => {
      const hitX = getX(hit) - 1
      const hitY = getY(hit).charCodeAt() - 64 - 1
      const hitWidth = 1
      const hitHeight = 1
      const hitPos = {
        top: hitY,
        left: hitX,
        width: hitWidth,
        height: hitHeight,
      }

      console.log('hitPos : ', hitPos)

      const hasHit = isCollide(shipPos, hitPos)

      if (hasHit) {
        hited += 1
      }
    })

    console.log('hited : ', hited)

    return {
      sunk: hited >= (width * height),
      hited: hited > 0
    }
  })

  let sunkCount = 0, hitCount = 0
  shipStatusList.forEach((status) => {
    if (!status.sunk && status.hited) {
      hitCount += 1
    } else if (status.sunk) {
      sunkCount += 1
    }
  })

  console.log('result : ', `${sunkCount},${hitCount}`)
  return `${sunkCount},${hitCount}`
}

// solution(
//   3,
//   '1A 1B,2C 2C',
//   '1B'
// )
//
// solution(
//   12,
//   '1A 2A,12A 12A',
//   '12A'
// )
solution(3, '1A 1B,2C 2C', '1B')

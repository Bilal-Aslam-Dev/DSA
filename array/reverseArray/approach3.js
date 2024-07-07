let array = [1, 2, 3, 4]

let result = []

// 4
// 4,3
// 4,3,2
// 4,3,2,1

for (let index = 0; index < array.length; index++) {
  const lastElement = array[array.length - 1 - index]

  result[index] = lastElement
}

console.log({ result })

// Without creating a new array

let array = [1, 2, 3, 4, 5, 6, 7]
let length = array.length

for (let i = 0; i < Math.floor(length / 2); i++) {
  let temp = array[i]
  array[i] = array[length - 1 - i]
  array[length - 1 - i] = temp
}

console.log(array)

//////// - ////////

// With creating a new array

let array2 = [1, 2, 3, 4]

let result = []

for (let index = 0; index < array2.length; index++) {
  const element = array2[index]
  result.unshift(element)
}

console.log(result)

/// - ///

// Another aproach

let array3 = [1, 2, 3]

let result2 = [...array3]

for (let index = 0; index < array3.length; index++) {
  const element = array[index]
}

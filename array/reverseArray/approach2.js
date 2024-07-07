// With creating a new array

let array2 = [1, 2, 3, 4]

let result = []

// 1
// 2,1
// 3,2,1
// 4,3,2,1

for (let index = 0; index < array2.length; index++) {
  const element = array2[index]
  result.unshift(element)
}

console.log(result)

/// - ///

// Without creating a new array

let array = [1, 2, 3, 4, 5, 6, 7]
let length = array.length

for (let i = 0; i < Math.floor(length / 2); i++) {
  const start = i
  const end = length - 1 - i;
  
  [array[start], array[end]] = [array[end], array[start]]
}

console.log(array)

//////// - ////////

let array = [1, 2, 3]

function reverseArray(arr) {
  let result = []

  function revRecursion(index) {
    if (index + 1 === arr.length) {
      return result[arr.length - 1] = arr[0]
    }

    result[index] = arr[arr.length - 1 - index]
    revRecursion(index + 1)
  }

  revRecursion(0)

  return result
}

console.log(reverseArray(array))

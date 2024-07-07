// For N = 15:

    // Output: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8
    // , "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

    const printNumbers = (num) => {
        let results = []
        for (let i = 1; i <= num; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                results.push("FizzBuzz")
            } else if (i % 3 === 0) {
                results.push("Fizz")
            } else if (i % 5 === 0) {
                results.push("Buzz")
            } else {
                results.push(i)
            }
        }
        return results
    }

console.log(printNumbers(15))

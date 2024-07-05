function reverseString(str) {
    const splittedStr = str.split("").reverse().join("")

    console.log(splittedStr)
    return splittedStr
}

reverseString("lorem ipsum")
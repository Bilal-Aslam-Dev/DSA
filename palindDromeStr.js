// str = adasdad
// str2 = adda


function palindromeStr(str) {
    const loweredCaseStr = str.toLowerCase()
    const reversedStr = str.split("").reverse().join("")

    return loweredCaseStr === reversedStr
}

console.log(palindromeStr("adaada"))
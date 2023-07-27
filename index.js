let array = []
let odds = []
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
        odds.push(array[i])
    }
}

console.log(odds)

let array2 = "ukelele"
let consonants = 0
let vowels = 0

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "a" || array2[i] == "e" || array2[i] == "i" || array2[i] == "o" || array2[i] == "u") {
        vowels += 1
    } else { consonants += 1 }
}

console.log(array2 + "has " + consonants + " consonants and " + vowels + " vowels")

array3 = []
res = []

for (let i = array3.length - 1; i >= 0; i--) {
    res.push(array3[i])
}

console.log(res)

let x = 1
result = []

while (x <= 100) {
    if (x % 15 === 0) {
        result.push("FizzBuzz")
    }
    else if (x % 3 === 0) {
        result.push("Fizz")
    }
    else if (x % 5 === 0) {
        result.push("Buzz")
    }
    else { 
        result.push(x)
    }
    x += 1
}

console.log(result)
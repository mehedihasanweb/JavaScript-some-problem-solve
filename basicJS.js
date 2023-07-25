//-------------- task-1 ---------------- 
function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString;
}

const text = 'hello world';
const result = reverseString(text)
// console.log(result);

//--------------- task-2 ----------------
function totalSumEvenNumber(num) {
    let totalSum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i]
        if (element > 0) {
            totalSum += element
        }
    }
    return totalSum;
}

const numbers = [2, -5, 10, -3, 7];
const result2 = totalSumEvenNumber(numbers)
// console.log(result2);


//----------- task-3 ------------------
function findFrequentElement(arr) {
    const frequencyElement = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        frequencyElement[element] = (frequencyElement[element] || 0) + 1
    }
    //find most frequency element
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequencyElement) {
        if (frequencyElement[element] > maxFrequency) {
            maxFrequency = frequencyElement[element]
            mostFrequentElement = element
        }
    }
    return mostFrequentElement
}
const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result3 = findFrequentElement(array)
// console.log(result3);

//---------------- task-4 -------------------
function findTwoNumbersWithSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9
const result4 = findTwoNumbersWithSum(sortedArray, targetValue)
// console.log(result4);

//--------------- task-5 --------------------
function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2
    }
    else if (operator === "-") {
        return num1 - num2
    }
    else if (operator === "*") {
        return num1 * num2
    }
    else {
        if (operator === '/') {
            //check for division by zero
            if (num2 === 0) {
                return 'cannot divide by zero'
            } else {
                return 'invalid operator'
            }
        }
    }
}
const result5 = calculator(5, 5, "*")
// console.log(result5);

//--------------- task-6 ----------------
function generatePassword(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}<>/?,.;:'";
    const password = []
    for (let i = 0; i < length; i++) {
        password.push(characters[Math.floor(Math.random() * characters.length)])
    }
    return password.join('')
}
const password = generatePassword(6)
// console.log(password);

//--------------- task-8 -----------------

function secondSmallestElement(array) {
    let smallestElement = array[0]
    let secondSmallestElement = array[1]

    for (let i = 2; i < array.length; i++) {
        if (array[i] < smallestElement) {
            secondSmallestElement = smallestElement
            smallestElement = array[i]
        }
        else if (array[i] < secondSmallestElement) {
            secondSmallestElement = array[i]
        }
    }
    return secondSmallestElement;
}

const array2 = [1, 3, 4, 5, 8, 2]
const smallestResult = secondSmallestElement(array2)
console.log(smallestResult);
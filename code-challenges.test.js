// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { boolean } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// -----------------------------
// PseudoCode:
    // input1: secretCodeWord1
    // output1: "L4ck4d41s1c4l"

    // input2: secretCodeWord2
    // output2: "G0bbl3dyg00k"

    // input3: secretCodeWord3
    // output3: "3cc3ntr1c"

    // Create a function called codedMessage that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
        // parameter: string
// -----------------------------


// describe("codedMessage", () => {
//     it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//         let input1 = secretCodeWord1
//         let input2 = secretCodeWord2
//         let input3 = secretCodeWord3
//         let result1 = "L4ck4d41s1c4l"
//         let result2 = "G0bbl3dyg00k"
//         let result3 = "3cc3ntr1c"
//       expect(codedMessage(input1)).toEqual(result1)
//       expect(codedMessage(input2)).toEqual(result2)
//       expect(codedMessage(input3)).toEqual(result3)
//     })
//   })
  // GOOD FAIL!!!!

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// -----------------------------
// PseudoCode:
    // I started off with the basic skeleton of a string and named it codedMessage and set my parameter to sting. Since that is what I wrote in my pseudocode previously.
    // I knew that I needed to switch out vowels with numbers. 
    // In order to do that I used .replace() which helps replace certain characters with others. 
        // Source link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // After running the function, nothing changed and I realized it is because .replace() makes a brand new string, therefor I needed to provide a new string. (refer to attempt 2)
    // After doing this, I realized that it the output was not taking into consideration capitalized letters such as the word "Eccentric". 
    // I did some research and found out that .regex() is able to apply the conditions that are set to everything within the function. (refer to attempt 3)
        // Source link: https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
// -----------------------------

    // const codedMessage = (string) => {    // ATTEMPT 1
    //     string.replace('a', '4')          
    //     string.replace('e', '3')
    //     string.replace('i', '1')
    //     string.replace('o', '0')
    //     return string 
    // }
    // const codedMessage = (string) => {    // ATTEMPT 2
    //     string = string.replace('a', '4')
    //     string = string.replace('e', '3')
    //     string = string.replace('i', '1')
    //     string = string.replace('o', '0')
    //     return string 
    // }

const codedMessage = (string) => {          // ATTEMPT 3
    string = string.replace(/a/ig, '4')
    string = string.replace(/e/ig, '3')
    string = string.replace(/i/ig, '1')
    string = string.replace(/o/ig, '0')
    return string 
}
console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))

// PASSED THE TEST! YAY!

    // ** QUESTION FOR INSTRUCTORS **
        // Did you know that 10 + 10 is the same as 11+11?
            // what's 10 + 10?
            // and what's 11 + 11? 
            // ... cue confusion or laughter
            // ba dum tss


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// -----------------------------
// PseudoCode:
    // input 1a: fruitArray
    // input 1b: letterA
    // output 1: ["Mango", "Apricot", "Peach"]

    // input 2a: fruitArray
    // input 2b: letterE
    // output2: ["Cherry", "Blueberry", "Peach"]

    // Create a function called particularLetter that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
        // Two parameters: array, letter
// -----------------------------

// describe("particularLetter", () => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//         let input1a = fruitArray
//         let input1b = letterA
//         let input2a = fruitArray
//         let input2b = letterE
//         let output1 = ["Mango", "Apricot", "Peach"]
//         let output2 = ["Cherry", "Blueberry", "Peach"]
//       expect(particularLetter(input1a, input1b)).toEqual(output1)
//       expect(particularLetter(input2a, input2b)).toEqual(output2)

//     })
//   })
    // GOOD FAIL!!!!


const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// -----------------------------
// PseudoCode:
    //I started off with the basic skeleton of a string and named it particularLetter and set my parameters to array and letter. Since that is what I wrote in my pseudocode previously.
    // Knowing that I needed to iterate through an array, I knew I needed to use a for loop.
    // After setting my for loop, I made sure to use array[i] in order to access each string in the array. 
    // I also had to set a new array and return it outside of the for loop.
    // Just in case capitalization was going to be a problem, I used .toLowerCase the array[i]. It's important to use array[i] and not just array because array[i] is referring to each item inside the array while just array is referring to the entire array as a whole.
    // I still had to make the function return the strings that contained the specific letter. 
        // In order to do that, I used .includes() in which I set to true and if it was true, it would push array[i] into the new array that was made.
// -----------------------------

const particularLetter = (array, letter) => {
    let newArray = []
    for(let i=0; i<array.length; i++) {
        if(array[i].toLowerCase().includes(letter) === true) {
            newArray.push(array[i])
        }
    }
    return newArray
// }
console.log(particularLetter(fruitArray, letterA))
console.log(particularLetter(fruitArray, letterE))
// FUNCTION PASSED THE TEST! YAY!
    // ** ADVICE FOR INSTRUCTORS **
        // Ladies, if he can’t appreciate your fruit jokes, you need to let that mango.
        // BA TUM TSS

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// -----------------------------
// PseudoCode:
    // input1: hand1
    // output1: true

    // input2: hand2
    // output2: false

    // input3: hand3
    // output3: false

    // input4: hand4
    // output4: true

    // Create a function called isItAFullHouse that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
        // One parameter: array
// -----------------------------

// describe("isItAFullHouse", () => {
//     it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.", () => {
//         let input1 = hand1
//         let input2 = hand2
//         let input3 = hand3
//         let input4 = hand4
//         let output1 = true
//         let output2 = false
//         let output3 = false
//         let output4 = true
//       expect(isItAFullHouse(input1)).toEqual(output1)
//       expect(isItAFullHouse(input2)).toEqual(output2)
//       expect(isItAFullHouse(input3)).toEqual(output3)
//       expect(isItAFullHouse(input4)).toEqual(output4)
//     })
//   })
// GOOD FAIL! YAY!

const hand1 = [5, 5, 5, 3, 3]  // 3 ,2
// Expected output: true
const hand2 = [5, 5, 3, 3, 4] // 2 2 1
// Expected output: false
const hand3 = [5, 5, 5, 5, 4] // 4,1
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

//psudeocode
//passing = [5,5,5,2,2] // 2 unique values 5,2
//if (countUniqueValue1 === 3 and countUniqueValue2 == 2){ return true}
//else return false 

//fail == [1,2,3,4,5] // 5 unique values 1,2,3,4,5

const isItAFullHouse = (array) => {

    //This code checks if array has 2 unique values
    const uniqueCount = new Set(array);
    if (uniqueCount.size !== 2){
        return false
    }
    //end check 

    // I needed to count the unique values of each element in an array. 
        // I ended up googling it and found a code that did something like that and I modified it.  
        // Code source: https://stackabuse.com/count-number-of-element-occurrences-in-javascript-array/
    let counter = {};
    for (element of array.flat()) {
        if (counter[element]) {
            counter[element] += 1;
        } else {
            counter[element] = 1;
        }
    };    
    //console.log(counter)
    //modified code end

    keys = Object.keys(counter)
    // this code above gets keys

    //console.log(keys)
    //check statement
    // This is checking if the values in my counter dictionary are 2 and 3
        // 2 and 3 meaning it would be a full house
    if (
        (counter[keys[0]] === 3 && counter[keys[1]] === 2 ) ||
        (counter[keys[0]] === 2 && counter[keys[1]] === 3 )
    ){
        return true
    } else{
        return false
    }
}

console.log(isItAFullHouse(hand1))
console.log(isItAFullHouse(hand2))
console.log(isItAFullHouse(hand3))
console.log(isItAFullHouse(hand4))
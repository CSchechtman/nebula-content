https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// write the function isAnagram
var isAnagram = function (test, original) {
    // input: 2 strings 
    // output: boolean
    // check if the lengths are the same
    // loop over each word and build a character object
    // look at each letter
    // if the letter exists as a key then add one more to it
    // if letter doesnt exist then create it and set to 1
    // do this for both words


    // Part 2 - Compare objects values
    // loop over on for the objects (for in loop)
    // and compare the values at the same key(letter)
    // if we find a match then continue on
    // if we find a mismatch then return false
    //   if(charObj1[key] === charObj2[key])

    // apple
    //     const cha1 = {
    //       a : 1,
    //       p : 2,
    //       l : 1,
    //       e : 1
    //     }

    //     //ppale
    //       const char2 = {
    //       a : 1,
    //       p : 2,
    //       l : 1,
    //       e : 1
    //     }




    //   };
    const char1 = {};
    const char2 = {};
    if (test.length != original.length) {
        return false;
    }
    for (let i = 0; i < test.length; i++) {
        let firstLetter = test[i].toLowerCase
        if(char1[firstLetter] = null){
            char1[firstLetter] = 1
        }else{
            char1[firstLetter] += char1[firstLetter]
        }
    }
    for (let i = 0; i < original.length; i++) {
        let firstLetter = original[i].toLowerCase
        if(char2[firstLetter] = null){
            char2[firstLetter] = 1
        }else{
            char2[firstLetter] += char2[firstLetter]
        }
    }
    for(let key in char1){
        if(char1[key] !== char2[key]){return false;
    }else{
    return true;
    }
}
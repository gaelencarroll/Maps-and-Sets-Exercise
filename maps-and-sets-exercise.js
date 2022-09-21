// Quick Question 1
new Set([1,1,2,2,3,4]) // {1,2,3,4}

// Quick Question 2 
const Q2 = [...new Set("referee")].join(""); // 'ref'

// Quick Quesiton 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {{[1,2,3],true},{[1,2,3],false}}

//hasDuplicate
const hasDuplicate = (arr) => {
    if (new Set(arr).size !== arr.length) {
        return true
    }
    else {
        return false
    }
}

//vowelCount
const vowelCount = (str) => {
    vowels = 'aeiou';
    lower = str.toLowerCase();
    const vowelMap = new Map();
    for(let letter of str){
        if(vowels.includes(letter)){
            if(vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter) + 1)
            }
            else{
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap;
}
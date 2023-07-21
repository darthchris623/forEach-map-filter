console.log('forEach / map / filter');

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr) {
    let doubles = [];
    arr.forEach(function (val) {
        doubles.push(val * 2)
    });
    return doubles;
};

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

function onlyEvenValues(arr){
    let onlyEvens = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            onlyEvens.push(val);
        };
    });
    return onlyEvens;
};

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

// const myArray = ['brandi', 'alley', 'rocky', 'ruby'];

function showFirstAndLast(arr) {
    let firstAndLast = [];
    arr.forEach(function (val) {
        firstAndLast.push(val[0] + val[val.length - 1]);
    });
    return firstAndLast
};

// showFirstAndLast(['colt', 'matt', 'tim', 'test']);
// showFirstAndLast(['hi', 'goodbye', 'smile']);
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
)

let object = [
    { name: 'Elie', title: 'instructor' },
    { name: 'Tim', title: 'instructor' },
    { name: 'Matt', title: 'instructor' },
    { name: 'Colt', title: 'instructor' }
];

function addKeyAndValue(arr,key,value){
    arr.forEach(function (val) {
        val[key] = value;
    });
    return arr;
};

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

const str = 'where is your dad';
const capStr = 'WHERE IS YOUR DAD';
let lowCase = capStr.toLowerCase();
let vowels = 'aeiou';
let result = '';
let sampleDictionary = {};
for (let char of lowCase) {
    if (vowels.includes(char)) {        
        if (!(char in sampleDictionary)) {
            sampleDictionary[char] = 0;
        }
        sampleDictionary[char]+=1;
    }
}
// object obtained should be { e: 1, o: 2 }
//loop through the object
for ([vow, tot] of Object.entries(sampleDictionary)) {
    result += vow + tot;
}
console.log(result);

// // My attempt:
// function vowelCount(str){
//     let lowCase = str.toLowerCase();
//     let vowels = 'aeiou';
//     let sampleDictionary = {};
//     for (let char of lowCase) {
//         if (vowels.includes(char)) {
//             if (!(char in sampleDictionary)) {
//                 sampleDictionary[char] = 0;
//             }
//             sampleDictionary[char]+=1;
//         }
//     }
//     // object obtained should be { e: 1, o: 2 }
//     return sampleDictionary;
// };

function vowelCount(str) {
    let splitArr = str.split(""); // 
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
}

// Given answer
function vowelCount(str) {
    let splitArr = str.split(""); // <-----This method is NOT covered/explained in the curriculum!!!
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

// let myArray = [1, 2, 3, 4, 5];

// let newArray = myArray.map(function (num) {
//     return num * 2;
// });

function doubleValuesWithMap(arr) {
    let doubles = arr.map(function (num) {
        return num * 2;
    });
    return doubles;
};

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

// let myArray = [1, 2, 3, 4, 5];

// let valTimesI = myArray.map(function (val, i) {
//     // console.log(val * i);
//     return val * i;
// });

function valTimesIndex(arr){
    let valTimesI = arr.map(function (val, i) {
        return val * i;
    });
    return valTimesI;
};

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

let myObject = [
    { name: 'Chris', pet: 'dog' },
    { name: 'Nick', pet: 'ferret' },
    { name: 'Gina', pet: 'bunny' }
];

// for (let i = 0; i < myObject.length; i++){
//     console.log(Object.entries(myObject[i]));
//     console.log(Object.keys(myObject[i]));
//     console.log(Object.values(myObject[i]));
// }


function extractKey(arr, key){
    let keyArray = arr.map(function (val) {
        return val[key];
    });
    return keyArray;
};

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

const roster = [
    { first: 'Michael', last: 'Wheeler' },
    { first: 'Steven', last: 'Wilson' },
    { first: 'William', last: 'Johnson' }
];

// roster.map(function (val) {
//     console.log(val['first'], val['last']);
// });

function extractFullName(arr){
    let fullNameArray = arr.map(function (val) {
        return val['first'] + ' ' + val['last'];
    });
    return fullNameArray;
};

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

const survey = [
    { first: 'Michael', last: 'Wheeler', isDogOwner: true },
    { first: 'Steven', last: 'Wilson' },
    { first: 'William', last: 'Johnson', isDogOwner: true },
    { first: 'Benjamin', last: 'Franklin' }
];

// let dogOwnerArray = [];
// for (let person of survey) {
//     if (person.hasOwnProperty('isDogOwner')) {
//         dogOwnerArray.push(person);
//         console.log(dogOwnerArray);
//     };
// };

// // The function with a "for of" loop.
// function filterByValue(arr, key) {
//     let dogOwnerArray = [];
//     for (let person of arr) {
//         if (person.hasOwnProperty(key)) {
//             dogOwnerArray.push(person);
//         };
//     };
//     return dogOwnerArray;
// };

function filterByValue(arr, key) {
    let dogOwnerArray = arr.filter(function (val) {
        return val.hasOwnProperty(key);
    });
    return dogOwnerArray;
};

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

// let myArray = [1, 2, 3, 4, 5];

// const filteredArray = myArray.filter(function (val) {
//     return val === 3;
// });

// // My attempt
// function find(arr, searchValue) {
//     let filteredArray = arr.filter(function (val) {
//         return val === searchValue;
//     });
//     return filteredArray;
// };

// ANSWER:
function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0]; // <-----This zero is NOT covered/explained in the curriculum!!!
};

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

for (let i = 0; i < survey.length; i++){
    if (survey[i].hasOwnProperty('isDogOwner')) {
        console.log(survey[i]);
    };
};

let dog = survey.filter(function (val) {
    return val.hasOwnProperty('isDogOwner');
})

// Given answer:
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];// <----Once again: this zero is NOT covered/explained in the curriculum!!!
};

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

const example = 'hello';
// const vowels = 'aeiou'; //Already declared
let newStr = '';
// First with a plain for loop.
for (let i = 0; i < example.length; i++){
    if (vowels.includes(example[i])) {
        newStr += example[i];
    };
    console.log(newStr);
};



function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("") // <----- NOT COVERED IN THE CURRICULUM!!!!!!
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
    })
    .join("");
};

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

let myArray = [1, 2, 3, 4, 5, 6];

let doubleOdds = myArray.filter(function (val) {
    return ((val % 2 === 1) * 2);
});


// function doubleOddNumbers(arr) {
//     let doubleOdds = [];
//     arr.forEach(function (val) {
//         if (val % 2 === 1) {
//             doubleOdds.push(val * 2);
//         }
//     });
//     return doubleOdds;
// };

// Given answer utilizes techniques NOT COVERED IN THE CURRICULUM!!!
function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
}
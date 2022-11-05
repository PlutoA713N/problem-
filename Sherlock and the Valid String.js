function isValid(s) {
  /// Observation
  // * What matters is the frequency of each character, not their order.
  // * There are three valid cases:
  //   1. All chars appear the same times.
  //   2. One char appears one more time than all the others.
  //   3. One char appears only once and the others appear the same time.

  /// Coding Strategy
  // - Make a char-frequency dictionary: {[char]: number} -- O(n)
  // - Make a frequency-frequency dictionary: {[number]: number} -- O(n)
  // - Use the frequency-frequency dictionary to analyze if the string is valide -- O(1)

  const charFreqDict = makeCharFreqDict(s);
  const freqFreqDict = makeFreqFreqDict(charFreqDict);
  const freqKeys = Object.keys(freqFreqDict).filter(key => key > 0);

  if (freqKeys.length === 1) {
    //   1. All chars appear the same times.
    return "YES";
  }

  if (
    freqKeys.length === 2
    && freqKeys.some((key, index) =>
      freqFreqDict[key] === 1 && key - freqKeys[1 - index] === 1
    )
  ) {
    // 2. One char appears one more time than all the others.
    // s = "ababccc"
    // freqFreqDict = {
    //   "2": 2,
    //   "3": 1
    // }
    return "YES";
  }

  if (
    freqKeys.length === 2
    && freqKeys.some(key => key == 1 && freqFreqDict[key] === 1)
  ) {
    // 3. One char appears only once and the others appear the same time.
    // s = "ababc"
    // freqFreqDict = {
    //   "2": 2,
    //   "1": 1
    // }
    return "YES";
  }

  return "NO";
}

// Sub Algorithm
function makeCharFreqDict(s) {
  let res = {};
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    const c = String.fromCharCode(i);
    res[c] = 0;
  }
  for (const c of s) {
    res[c] += 1;
  }
  return res;
}

function makeFreqFreqDict(charFreqDict) {
  let res = {};
  for (const char in charFreqDict) {
    const frequency = charFreqDict[char];
    if (res[frequency] === undefined) {
      res[frequency] = 1;
    } else {
      res[frequency] += 1;
    }
  }
  return res;
}



function isArrayElemsSame(arr) {
    let arrlength = arr.length
    let last = arr[arrlength-1];
    let first = arr[0];
    if(first === last || // if first and last elements are same then frequency of chars are same
    last-1 === first && last-1 === arr[arrlength-2] ||  // if last elemnt is different then check reducing 1 makes it equal to others
    (first === 1 && arr.splice(1, arr.length-1) // check if removing first char makes everything equal
    .every((item) => item === last))
        return "YES"  
    return  "NO";
}

// Complete the isValid function below.
function isValid(s) {
    let stringDictionary = {};
    for(let i =0;i<s.trim().length;i++) {
        let currentChar = s.charAt(i);
        if(stringDictionary[currentChar]) {
            stringDictionary[currentChar] += 1;
        } else {
            stringDictionary[currentChar] = 1;
        }
    }


function isValid (s) {
  let hash = {};
  let max, min;
  let minCount = 0;
  let maxCount = 0;
  ///Get the frequencies of each characters
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (hash[key]) {
      hash[key]++;
    } else {
      hash[key] = 1;
    }
  }
  //Push all strings in to an array
  let frequencies = [];
  for (let key in hash) {
    frequencies.push (hash[key]);
  }
  //Sort the array and get the max and min frequency
  frequencies.sort ();
  min = frequencies[0];
  max = frequencies[frequencies.length - 1];
  //Get the no of max count and min count for the frequency
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] === max) {
      maxCount++;
    }
    if (frequencies[i] === min) {
      minCount++;
    }
  }
  ///Make our validation check
  if (min === max) {
    return 'YES';
  }
  if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
    return 'YES';
  }
  if (max - min !== 1) {
    return 'NO';
  }
  if (maxCount === minCount) {
    return 'NO';
  }
  if (maxCount === 1 || minCount === 1) {
    return 'YES';
  }

  return 'NO';
}




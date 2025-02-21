/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b || b === c || a === c) {
    if (a + b > c && b + c > a && a + c > b) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const roman = [
    { symbol: 'X', value: 10 },
    { symbol: 'IX', value: 9 },
    { symbol: 'V', value: 5 },
    { symbol: 'IV', value: 4 },
    { symbol: 'I', value: 1 },
  ];

  let result = '';
  let temp = num;

  for (let i = 0; i < roman.length; i += 1) {
    const count = Math.floor(temp / roman[i].value);
    temp %= roman[i].value;

    for (let j = 0; j < count; j += 1) {
      result += roman[i].symbol;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let ans = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        ans = `${ans}minus`;
        break;
      case '1':
        ans = `${ans}one`;
        break;
      case '2':
        ans = `${ans}two`;
        break;
      case '3':
        ans = `${ans}three`;
        break;
      case '4':
        ans = `${ans}four`;
        break;
      case '5':
        ans = `${ans}five`;
        break;
      case '6':
        ans = `${ans}six`;
        break;
      case '7':
        ans = `${ans}seven`;
        break;
      case '8':
        ans = `${ans}eight`;
        break;
      case '9':
        ans = `${ans}nine`;
        break;
      case '0':
        ans = `${ans}zero`;
        break;
      case '.':
      case ',':
        ans = `${ans}point`;
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      ans = `${ans} `;
    }
  }
  return ans;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;
  while (temp !== 0) {
    const currDigit = temp % 10;
    if (digit === currDigit) {
      return true;
    }
    temp = Math.floor(temp / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (rightSum === leftSum) {
      return i;
    }
    if (i < arr.length - 1) {
      rightSum -= arr[i + 1];
      leftSum += arr[i];
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = new Array(size);
  for (let i = 0; i < result.length; i += 1) {
    result[i] = new Array(size);
  }

  let curr = 1;
  let up = 0;
  let left = 0;
  let right = size - 1;
  let down = size - 1;

  while (curr < size * size + 1) {
    for (let i = left; i <= right; i += 1) {
      result[up][i] = curr;
      curr += 1;
    }
    up += 1;

    for (let i = up; i <= down; i += 1) {
      result[i][right] = curr;
      curr += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      result[down][i] = curr;
      curr += 1;
    }
    down -= 1;

    for (let i = down; i >= up; i -= 1) {
      result[i][left] = curr;
      curr += 1;
    }
    left += 1;
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const result = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = result[i][j];
      result[i][j] = result[j][i];
      result[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    let l = 0;
    let r = n - 1;
    while (l < r) {
      const temp = result[i][l];
      result[i][l] = result[i][r];
      result[i][r] = temp;
      l += 1;
      r -= 1;
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr1) {
  const arr = arr1;
  function quickSort(start, end) {
    if (start >= end) return;

    const pivot = arr[start];
    let left = start + 1;
    let right = end;

    while (left <= right) {
      if (arr[left] > pivot && arr[right] < pivot) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
      }
      if (arr[left] <= pivot) left += 1;
      if (arr[right] >= pivot) right -= 1;
    }

    const temp = arr[start];
    arr[start] = arr[right];
    arr[right] = temp;

    quickSort(start, right - 1);
    quickSort(right + 1, end);
  }

  quickSort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 * 01234567 1
 * 02345671 1
 * 02456713 3
 * 02467135 4
 * 0246891357 5
 * 0246813579
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 * qwerty, 4
 */
function shuffleChar(str, iterations) {
  const ans = str;
  let currentStr = ans;

  const shuffleOnce = (s) => {
    let result = s;
    let j = 1;
    while (j < Math.floor(s.length / 2) + 1) {
      const before = result.substring(0, j);
      const after = result.substring(j + 1);
      const char = result.charAt(j);
      result = before + after + char;
      j += 1;
    }
    return result;
  };

  let cycleLength = 0;
  let foundCycle = false;
  for (let i = 0; i < iterations; i += 1) {
    currentStr = shuffleOnce(currentStr);
    cycleLength += 1;

    if (currentStr === ans && iterations !== i - 1) {
      foundCycle = true;
      break;
    }
  }

  let reducedIterations = iterations;
  if (foundCycle) {
    reducedIterations = iterations;
    reducedIterations %= cycleLength;
  }

  let finalResult = ans;
  for (let i = 0; i < reducedIterations; i += 1) {
    finalResult = shuffleOnce(finalResult);
  }

  return finalResult;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 5 4 3 2 1
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let temp = number;

  while (temp > 0) {
    arr.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  arr.reverse();

  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let minLargerIndex = i + 1;
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[j] > arr[i] && arr[j] < arr[minLargerIndex]) {
      minLargerIndex = j;
    }
  }

  const tempSwap = arr[i];
  arr[i] = arr[minLargerIndex];
  arr[minLargerIndex] = tempSwap;

  for (let k = i + 1; k < arr.length - 1; k += 1) {
    for (let l = k + 1; l < arr.length; l += 1) {
      if (arr[k] > arr[l]) {
        const tempSort = arr[k];
        arr[k] = arr[l];
        arr[l] = tempSort;
      }
    }
  }

  let result = 0;
  for (let m = 0; m < arr.length; m += 1) {
    result = result * 10 + arr[m];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

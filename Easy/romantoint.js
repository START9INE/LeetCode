Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



Constraints.

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// This solution utilizes a Map Object
// This holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// We declare a map to store the roman numerals
// We then store roman numerals in key-value pairs with romanMap.set('I', 1);
// We get retrieve the value by utilizing romanMap.get(s[n -1] which translates to romanMap.get("I")) in the first test case.
// remember n in this case is equal to s.length so the above reads:    romanMap.get(s[s.length - 1]) which is grabbing "I" in the first testcase  "I" in the second test case and "V" in the third test case.


/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    // Map to store romans numerals
    const romanMap = new Map();
    // Fill the map
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    // Length of the given string
    const n = s.length;
    // Variable to store result
    let num = romanMap.get(s[n - 1]);
    // Loop for each character from right to left
    for (let i = n - 2; i >= 0; i--) {
        // Check if the character at right of current character is
        // bigger or smaller
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num;
};

// Remember n = s.length
// Remember num = variable to store default (initial value is the last element in the string)


// Test Case #1 Visualized "III"
// num = 1
// starting with n - 2 (I)/(1)
// is 1 >= to 1 ? (Yes)
// so we add 1 to num (num = 2)
// now with n - 3 (I)/(1)
// is 1 >= to 1 (Yes)
// so again we add 1 to num (num = 3)



// Test Case #2 Visualized "LVIII"
// num = 1
// starting with n - 2 (I)/(1)
// is 1 >= to 1 ? (Yes)
// so we add 1 to num (num = 2)
// now with n - 3 (I)/(1)
// is 1 >= to 1 (Yes)
// so again we add 1 to num (num = 3)
// no with n - 4 (V) (5)
// is 5 >= to 1 (Yes)
// so again we add 5 to num (num= 8)
// now with n - 5 (L) (50)
// is 50 >= to 5 (Yes)
// so again we add 50 to num (num = 58)



// Test case # 3 Visualized "MCMXCIV"
// num = 5
// starting with n -2 (I)(1)
// is 1 >= to 5? (No)
// so we subtract 1 from num (num = 4)
// now with n - 3 (C)(100)
// is 100 >= 1 ? (Yes)
// so we add 100 to num (num = 104)
// now with n - 4 (X)(10)
// is 10 >= 100 ? (No)
// so we subtract 10 from num (num = 94)
// no with n - 5 (M) (1000)
// is 1000 >= 10 (Yes)
// so we add 1000 to num (num = 1094)
// now with n - 6 (C) (100)
// is 100 >= 1000? (no)
// so we subtract 100 from num (num = 994)
// finally with n - 7 (M)(1000)
// is 1000 >= 100? (Yes)
// so we add 1000 to num (num = 1994)





// Below is a very readable and easy to understand code from LeetCode
//Also using HashMap
//
//
// var romanToInt = function(s) {
    var map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    if(s.length === 1) return map[s[0]];
    var res = 0;
    for(var i = 0 ; i < s.length;i++){
        
        if(map[s[i]] < map[s[i+1]]){
            res += (map[s[i+1]] - map[s[i]]);
            i++;
        }else res += map[s[i]]
    }
    return res;
};

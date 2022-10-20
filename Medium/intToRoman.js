Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

Constraints:

    1 <= num <= 3999

var intToRoman = function (num) {
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
};


//It is clear from the problem description and examples that we will be given a number between 1 and 3999, and we will have to convert it into corresponding Roman equivalent.
//
//Some Roman symbols and their equivalent integer values are already given. Only thing we need to notice is the cases where subtraction is used.
//Approach
//
//This problem should be very simple to solve. Since the maximum number can be 3999, we can have only four places — Ones, Tens, Hundreds and Thousands.
//
//Thus, we will create four arrays with all the possible combination of places. Since 0 doesn’t make any impact, we will put 0th place of every as an empty string.
//
//The four arrays will be like below -
//
//M = ["", "M", "MM", "MMM"]
//C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
//X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
//I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
//
//Let’s understand this with an example num = 2467.
//
//    Thousands place ⇨ 2
//    Hundreds place ⇨ 4
//    Tens place ⇨ 6
//    Ones place ⇨ 7
//
//If we get the corresponding values from the arrays, then we will get M[2], C[4], X[6] and I[7]. The output will be — MMCDLXVII.
//Time Complexity
//
//We are scanning each digit of the number one by one therefore, the time complexity will be O(log10n). But n cannot be grater than 3999, therefore, the maximum time can be O(loh103999) ~= O(3.60) which is //constant hence the overall time complexity will be O(1).
//Space Complexity
//
//We are using four arrays whose sizes don’t depend on the input size hence the space complexity will be O(1).

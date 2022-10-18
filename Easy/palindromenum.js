9. Palindrome Number
Easy

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?




/**
 * @param {number} x
 * @return {boolean}
 *// 



// The more intuitive solution was my first solution
// However it was not optimal
// Simply conver the int into a string
// then into an array with .split()
// reverse it with .reverse() and rejoin it with .join()
// finally we compare it against the original int  and return true if they are the same or false if they are not.
	
var isPalindrome = function(x) {
		return x.toString().split('').reverse().join('') == x;

	};



// Use a for loop in order to further optimize the code
// Attempted to do so without first converting it into a string
// without conversion edge cases such as negtive ints would return true when in reality they were false
// First we declase two variables xString for the int in a string format
// and xLen for the length of the string
// We then loop through the string
// We then compare the value of the current iterated element with the element at what we preceive to be the relative location when reversed 
// If they are not equal return false
// else return true.
function isPalindrome(x) {
	var xString = x.toString()
	var xLen = xString.length;
	for (var i = 0; i < xLen / 2; i++) {
		if (xString[i] !== xString[xLen - 1 - i]) {
			return false;
		}
	}
	return true;
}

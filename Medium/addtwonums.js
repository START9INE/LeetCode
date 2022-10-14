You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 

Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.


	


	/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // Convert a ListNode to an array of its digits in reverse order
    function ConvertReverseListNodeToArray(listNode) {
        // Initialise an array to return
        let returnedArray = [];

        // Check if there is another level to the ListNode
        if (listNode.next != null) {
            // Merge the current array with the result of calling the function again on the next level
            returnedArray = returnedArray.concat(
                ConvertReverseListNodeToArray(listNode.next)
            );
        }

        // Add the current node's value to the returned array
        returnedArray.push(listNode.val);

        // Return the constructed array
        return returnedArray;
    }

    // Convert the ListNodes to Arrays
    const l1Array = ConvertReverseListNodeToArray(l1);
	  const l2Array = ConvertReverseListNodeToArray(l2);

    // Add the numbers (after merging them), using BigInt due to LeetCode's edge cases
    let newTotal = BigInt(l1Array.join('')) + BigInt(l2Array.join(''));

    // Split the total back into an array
    splitNewTotal = newTotal.toString().split('');

    // Initialise an empty ListNode
    let returnedListNode = null;

    // Loop through the total value's array
    for (let i = 0; i < splitNewTotal.length; i++) {t
        // Add this digit to the ListNode
        returnedListNode = {
            val: splitNewTotal[i],
            next: returnedListNode,
        };
    }

    // Return the constructed ListNode
    return returnedListNode;
};

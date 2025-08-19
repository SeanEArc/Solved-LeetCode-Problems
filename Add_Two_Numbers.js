// SOLUTION: ADD_TWO_NUMBERS (https://leetcode.com/problems/add-two-numbers/)
/*
NOTES:
First time using a linked list. Essentially, you cannot access the value of the next node without going through the current node. So you have to keep track of the current node and then move to the next node. You also cannot use the length of a linked list in a for loop so you have to use a while loop. 

Think of a liked list like a chain. You can only access the next link of the chain by going through the current first. So you always have to go in order. It may have the same syntax as an array, BUT IT IS NOT THE SAME.

HERE ARE REAL WORLD EXAMPLES OF USING LINKED LISTS FROM GOOGLE:
Examples include web browser history (back/forward navigation), music and video playlists, image viewers (next/previous navigation), and even in operating systems for task scheduling

BASIC METHODS/FUNCTIONS FOR LINKED LISTS:

val: Access the value of the current node.
next: Access the next node in the linked list.
append({Value}): Add a new node to the end of the linked list.
pop: Remove the last node from the linked list.
delete({Value}): Remove a specific node from the linked list.

*/


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
var addTwoNumbers = function(l1, l2) {

    // Creates a new linked list
    let returnedLinkedList = new ListNode(0);
    let current = returnedLinkedList;
    let carry = 0

    while (l1 !== null || l2 !== null || carry > 0){

        let l1Value = 0;
        let l2Value = 0;

        if (l1 !== null){
            l1Value = l1.val;
        } else {
            l1Value = 0;
        }

        if (l2 !== null){
            l2Value = l2.val;
        } else {
            l2Value = 0;
        }

        let sum = l1Value + l2Value + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10

        // Add's the value of digit to the next spot on the Linked List. Example: 0, 6 , 4, 7, 3, etc. (0 will always be first because we initialized it that way! We remove it when we return it.)
        current.next = new ListNode(digit)

        // Moves current LinkedArray "index" to the next spot. (Before we were on index 1, then this moves us to index 2)
        current = current.next

        if (l1 !== null) {
            l1 = l1.next;
        }

        if (l2 !== null) {
            l2 = l2.next;
        }

    }

    // Returns the list after the first value. We initialized it at 0 so we are skipping it.
    return returnedLinkedList.next;
    
};


/*
2. Add Two Numbers
Medium
Topics
premium lock icon
Companies
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
*/
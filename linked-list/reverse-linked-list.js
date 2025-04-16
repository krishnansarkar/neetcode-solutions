// Reverse Linked List

// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]
// Example 2:

// Input: head = []
// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        var listStack = [];
        var currentNode = head;

        if (currentNode == null) {
            return null;
        }

        while (currentNode.next) {
            listStack.push(currentNode);
            currentNode = currentNode.next;
        }
        const newHead = currentNode;
        while (listStack.length > 0) {
            const nextNode = listStack.pop();
            currentNode.next = nextNode;
            currentNode = nextNode;
        }
        currentNode.next = null;

        return newHead;
    }
}

const createLinkedListFromArray = (input) => {
    if (input.length == 0) return null;

    const head = new ListNode();
    var currentNode = head;
    for (let i = 0; i < input.length - 1; i++) {
        currentNode.val = input[i];
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
    }
    currentNode.val = input[input.length - 1];

    return head;
};

const printLinkedList = (head) => {
    var line = [];
    var currentNode = head;
    while (currentNode) {
        line.push(currentNode.val);
        currentNode = currentNode.next;
    }
    console.log(line);
};

const solution = new Solution();

var head = createLinkedListFromArray([0, 1, 2, 3]);
printLinkedList(head);
head = solution.reverseList(head);
printLinkedList(head); // [3, 2, 1, 0]

console.log("-----");
head = createLinkedListFromArray([]);
printLinkedList(head);
head = solution.reverseList(head);
printLinkedList(head); // []

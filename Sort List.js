/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head) {
        return head;
    }
    var originHead = head;
    while(head.next) {
        head = head.next;
    }
    var lastNode = head, flagNode = head;
    lastNode.next = originHead; //create a loop by connecting head and end.
    while(lastNode.next !== flagNode) {
        var currentNode = lastNode.next;
        if(lastNode === flagNode) {
            flagNode.next = currentNode;
            lastNode = currentNode;
        } else {
            for(var p = flagNode; p !== lastNode; p = p.next) {
                if(currentNode.val <= p.next.val) {
                    lastNode.next = currentNode.next;
                    currentNode.next = p.next;
                    p.next = currentNode;
                    break;
                }
            }
            if(p === lastNode) {
                lastNode = currentNode;
            }
        }
    }
    var startNode = flagNode.next;
    lastNode.next = null;
    for(p = flagNode; p.next; p = p.next) {
        if(flagNode.val <= p.next.val) {
            if(p === flagNode) {
                startNode = flagNode;
                break;
            } else {
                flagNode.next = p.next;
                p.next = flagNode;
                break;
            }
        }
    }
    if (!p.next) {
        p.next = flagNode;
        flagNode.next = null;
    }
    return startNode;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {

//   let longlist = [];
//   let shortlist = [];

//   if (list1.length >= list2.length) {
//     longlist = list1
//     shortlist = list2
//   } else {
//     longlist = list2
//     shortlist = list1
//   }

//   let result = [];

//   for (let i = 0; i < longlist.length; i++) {
//     if (shortlist[i] === undefined) {
//       result.push(longlist[i])
//     } else if (longlist[i] >= shortlist[i]) {
//       result.push(shortlist[i], longlist[i])
//     } else if (longlist[i] < shortlist[i]) {
//       result.push(longlist[i], shortlist[i])
//     }
//   }

//   return result

// };


// var mergeTwoLists = function (l1, l2) {
//     var mergedHead = { val: -1, next: null },
//         crt = mergedHead;
//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//             crt.next = l2;
//             l2 = l2.next;
//         } else {
//             crt.next = l1;
//             l1 = l1.next;
//         }
//         crt = crt.next;
//     }
//     crt.next = l1 || l2;

//     return mergedHead.next;
// };

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;

    let head;
    let tail;

    let p1 = l1;
    let p2 = l2;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            if (tail) tail = tail.next = new ListNode(p1.val);
            else tail = head = new ListNode(p1.val);

            p1 = p1.next
        } else {
            if (tail) tail = tail.next = new ListNode(p2.val);
            else tail = head = new ListNode(p2.val);

            p2 = p2.next
        }
    }

    while (p1) {
        if (tail) tail = tail.next = new ListNode(p1.val);
        else tail = head = new ListNode(p1.val);
        p1 = p1.next
    }

    while (p2) {
        if (tail) tail = tail.next = new ListNode(p2.val);
        else tail = head = new ListNode(p2.val);
        p2 = p2.next
    }

    return head;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
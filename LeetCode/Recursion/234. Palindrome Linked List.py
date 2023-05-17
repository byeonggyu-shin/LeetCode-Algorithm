# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        # def findSameNode(head1: ListNode, head2: ListNode):
        #     if self.head.val == self.next(head):
        #         return head1 or head2
        #     if head1.val != head2.val:
        #         return None
        #     return findSameNode(head1.next, head2.next)
        # if not head:
        #     return True
        
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # 역순 연결 리스트 뒤집기
        prev, curr = None, slow
        while curr:
            curr.next, prev, curr = prev, curr, curr.next

        # 두 연결 리스트의 값 비교
        left, right = head, prev
        while left and right:
            if left.val != right.val:
                return False
            left, right = left.next, right.next

        return True

# 노드 깊이 탐색 
# 만약 val == next 이면 
# 깊이 탐색 탈출 하면서 next 와 값이 같은지 비교
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
  # 반복
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
      prev = None
      curr = head
    
      while curr:
          nxt = curr.next
          curr.next = prev
          prev = curr
          curr = nxt
      
      return prev

  # 재귀  
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# def reverseList(head: ListNode) -> ListNode:
#     if not head or not head.next:
#         return head
        
#     new_head = reverseList(head.next)
#     head.next.next = head
#     head.next = None
#     return new_head
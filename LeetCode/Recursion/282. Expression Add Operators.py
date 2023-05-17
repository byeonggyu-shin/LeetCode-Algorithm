class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        
        # opt = '+-*'
        # exp = ''
        # calc = 0
        # res = []
        
        # # 일단 모든 경우?


        # def calculate(n):
        #   if n == 0:
        #      return exp

        #   for j in opt:
        #     if len(exp) == 0:
        #       exp = num(n)
        #     else:
        #       exp = exp + j + num[i]  

        #   calculate(n-1)   


        #   pass

        # for i in range[num]-1:
        #     for j in opt:
        #       if len(exp) == 0:
        #         exp = num(i)
        #       else:
        #         exp = exp + j + num[i]  
              
        #       if i == len(num)-1:
        #         calc = eval(exp)
        #         if exp == target:
        #           res.append(exp)
        #         else:
        #            calc = 0
        #            exp = ''
        
        # return res       

      ans = [] 

      def dfs(start: int, prev: int, eval: int, path: List[str]) -> None:
        if start == len(num):
          if eval == target:
            ans.append(''.join(path))
          return

        for i in range(start, len(num)):
          if i > start and num[start] == '0':
            return
          s = num[start:i + 1]
          curr = int(s)
          if start == 0:
            path.append(s)
            dfs(i + 1, curr, curr, path)
            path.pop()
          else:
            for op in ['+', '-', '*']:
              path.append(op + s)
              if op == '+':
                dfs(i + 1, curr, eval + curr, path)
              elif op == '-':
                dfs(i + 1, -curr, eval - curr, path)
              else:
                dfs(i + 1, prev * curr, eval - prev + prev * curr, path)
              path.pop()
      dfs(0, 0, 0, [])
      return ans
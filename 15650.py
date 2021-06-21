#https://www.acmicpc.net/problem/15650
#N과 M (2)

def dfs():
    if len(lst) == M:
        lst_sort = sorted(lst)
        if lst_sort not in lst2:
            lst2.append(lst_sort)
            print(' '.join(map(str, lst_sort)))
        return
    
    for i in range(1, N+1):
        if i in lst:
            continue

        lst.append(i)
        dfs()
        lst.pop()

N, M = map(int, input().split())
lst = []
lst2 = []

dfs()

'''
#lst 한개 더 안쓰는 방법
n,m = list(map(int,input().split()))
s = []
def dfs(start):
    if len(s)==m:
        print(' '.join(map(str,s)))
        return
    
    for i in range(start,n+1):
        if i not in s:
            s.append(i)
            dfs(i+1)
            s.pop()
dfs(1)
'''
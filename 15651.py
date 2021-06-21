#https://www.acmicpc.net/problem/15651
#N과 N (3)

def dfs():
    if len(lst) == M:
        print(' '.join(map(str, lst)))
        return
    
    for i in range(1, N + 1):
        lst.append(i)
        dfs()
        lst.pop()

N, M = map(int, input().split())
lst = []

dfs()
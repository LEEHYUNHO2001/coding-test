#https://www.acmicpc.net/problem/15649
#N과 M (1)

N, M = map(int, input().split())

def dfs():
    if len(lst) == M:
        print(' '.join(map(str, lst)))
        return
    
    for i in range(1, N + 1):
        if i in lst:
            continue
        lst.append(i)
        dfs()
        lst.pop()

lst = []
dfs()
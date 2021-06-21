#https://www.acmicpc.net/problem/15652
#N과 M (4)

def dfs():
    if len(lst) == M:
        print(' '.join(map(str, lst)))
        return

    for i in range(1, N + 1):
        if len(lst) >= 1:
            if i < lst[len(lst) - 1]:
                continue
        lst.append(i)
        dfs()
        lst.pop()

N, M = map(int, input().split())
lst = []

dfs()
#https://www.acmicpc.net/problem/2775
#부녀회장이 될테야

import sys

T = int(input())
result = 0

for i in range(0, T):
    k = int(sys.stdin.readline().strip())
    n = int(sys.stdin.readline().strip())

    lst = []
    lst2 = []
    cnt = 0

    for i in range(0, n):
        cnt += 1
        lst.append(cnt)
    for i in range(0, k-1):
        for j in range(0, n):
            result += lst[j]
            lst2.append(result)
        result = 0
        lst = lst2
        lst2 = []

    print(sum(lst))


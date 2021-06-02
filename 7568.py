#https://www.acmicpc.net/problem/7568
#덩치

import sys

N = int(input())
lst = []
lst2 = []

for i in range(N):
    a, b = map(int, sys.stdin.readline().split())
    lst.append([a, b])

for i in lst:
    k = 1
    for j in lst:
        if i[0] < j[0] and i[1] < j[1]:
            k += 1
    print(k)

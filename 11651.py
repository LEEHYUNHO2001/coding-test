#https://www.acmicpc.net/problem/11651
#좌표 정렬하기 2

import sys

N = int(input())
lst = []

for i in range(N):
    a, b = map(int, sys.stdin.readline().split())
    lst.append([b, a])

lst.sort()

for i in range(N):
    lst[i][0], lst[i][1] = lst[i][1], lst[i][0]
    print(lst[i][0], lst[i][1])
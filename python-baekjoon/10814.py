#https://www.acmicpc.net/problem/10814
#나이순 정렬

import sys

N = int(input())
lst = []

for i in range(N):
    age, name = sys.stdin.readline().split()
    lst.append((int(age), name))

lst.sort(key = lambda lst : lst[0])

for i in range(N):
    print(lst[i][0], lst[i][1])

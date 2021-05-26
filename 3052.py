#https://www.acmicpc.net/problem/3052
#나머지

import sys

lst = []

for i in range(0, 10):
    lst.append(int(sys.stdin.readline().strip())%42)
print(len(set(lst)))
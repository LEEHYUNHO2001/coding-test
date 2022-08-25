#https://www.acmicpc.net/problem/8958
#OX퀴즈

import sys

N = int(input())
lst = []

for i in range(0, N):
    sum = 0
    count = 0
    lst.append(map(str, sys.stdin.readline().strip()))
    for j in lst[i]:
        if j == 'O':
            count += 1
            sum += count
        else:
            count = 0
    print(sum)

        
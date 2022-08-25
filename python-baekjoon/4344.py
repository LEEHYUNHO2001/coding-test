#https://www.acmicpc.net/problem/4344
#평균은 넘겠지

import sys

C = int(input())

for i in range(0, C):
    lst = list(map(int, sys.stdin.readline().split()))
    N = lst[0]
    avg = sum(lst[1:])/N
    count = 0
    for j in lst[1:]:
        if j>avg:
            count += 1
    print("%.3f%%"%((count/N)*100))
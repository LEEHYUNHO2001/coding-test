#https://www.acmicpc.net/problem/15552
#빠른 A+B

import sys

T = int(input())
for i in range(0, T):
    A, B = map(int, sys.stdin.readline().split())
    print(A+B)
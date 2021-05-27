#https://www.acmicpc.net/problem/2675
#문자열 반복

import sys

T = int(input())

for i in range(0, T):
    lst = list(sys.stdin.readline().split())
    word = ""
    N = int(lst[0])
    S = str(lst[1])
    for j in S:
        word += j*N    
    print(word)
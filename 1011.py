#https://www.acmicpc.net/problem/1011
#Fly me to the Alpha Centauri
#도착 직전은 1광년

import sys

T = int(input())

for i in range(0, T):
    a, b = map(int, sys.stdin.readline().split())
    dist = b - a
    sqrt = dist**(1/2)
    int_sqrt = int(sqrt)
    cnt = 0

    #제곱수 일 때,
    if sqrt == int_sqrt:
        sp_num = int_sqrt - 1
        cnt = int_sqrt + sp_num
    else:
        sp_num2 = dist - (int_sqrt * int_sqrt) #index구하기
        if sp_num2 <= int_sqrt:
            cnt = int_sqrt * 2
        else:
            cnt = int_sqrt * 2 + 1
    print(cnt)



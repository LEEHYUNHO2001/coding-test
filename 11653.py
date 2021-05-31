#https://www.acmicpc.net/problem/11653
#소인수분해

N = int(input())

if N != 1:
    num = 2
    while N != 1:
        if N % num == 0:
            print(num)
            N //= num
        else:
            num += 1
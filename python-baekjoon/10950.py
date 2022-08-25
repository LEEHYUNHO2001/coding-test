#https://www.acmicpc.net/problem/10950
#A+B -3

T=int(input())
for i in range(0, T):
    A, B = map(int, input().split())
    print(A+B)
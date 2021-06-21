#https://www.acmicpc.net/problem/9663
#N-Queen

N = int(input())
lst = [0] * (N*N)

for i in range(N):
    lst[i] = i
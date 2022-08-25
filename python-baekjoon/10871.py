#https://www.acmicpc.net/problem/10871
#X보다 작은 수

N, X = map(int, input().split())
A = list(map(int, input().split()))
for i in A:
    if i<X:
        print(i , end=" ")
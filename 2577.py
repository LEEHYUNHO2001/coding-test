#https://www.acmicpc.net/problem/2577
#숫자의 개수

A = int(input())
B = int(input())
C = int(input())
result = str(A*B*C)
for i in range(0, 10):
    print(result.count(str(i)))
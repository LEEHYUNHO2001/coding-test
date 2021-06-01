#https://www.acmicpc.net/problem/10872
#팩토리얼

N = int(input())
result = 1

for i in range(0, N):
    result *= N
    N -= 1
if result == 0:
    result = 1
print(result)
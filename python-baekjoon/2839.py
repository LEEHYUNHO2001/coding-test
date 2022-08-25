#https://www.acmicpc.net/problem/2839
#설탕 배달

N = int(input())
result = 0

while N > 0:
    if N % 5 == 0:
        result += N//5
        N = N % 5
    else:
        N -=3
        result += 1
if N < 0:
    result = -1
print(result)
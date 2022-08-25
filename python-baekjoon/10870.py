#https://www.acmicpc.net/problem/10870
#파보나치 수 5

n = int(input())
lst = [0, 1]
result = 0

if n == 0:
    result = 0
elif n == 1:
    result =1
else:
    for i in range(0, n-1):
        lst.append(lst[i] + lst[i+1])
        result = lst[i+2]
print(result)
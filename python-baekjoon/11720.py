#https://www.acmicpc.net/problem/11720
#숫자의 합

N = int(input())
num = int(input())
sum = 0
for i in str(num):
    sum += int(i)
print(sum)
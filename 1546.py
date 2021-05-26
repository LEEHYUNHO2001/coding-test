#https://www.acmicpc.net/problem/1546
#평균

import sys

N = int(input())
new_avgsum = 0

lst = list(map(int, sys.stdin.readline().split()))
max_grade = max(lst)

for i in range(0, N):
    new_avgsum += (lst[i]/max_grade)*100
new_avg = new_avgsum/N
print(new_avg)
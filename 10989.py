#https://www.acmicpc.net/problem/10989
#수 정렬하기 3

import sys

N = int(input())
range_lst = [0]*10001

for i in range(N):
    num = int(sys.stdin.readline().strip())
    print(range_lst[num])
    range_lst[num] = range_lst[num] + 1
    print(range_lst[num])

for i in range(10001):
    if range_lst[i] != 0:
        for _ in range(range_lst[i]):
            print(i)


'''
#삽입정렬 - 메모리초과
import sys
N = int(input())
lst = []

for i in range(N):
    num = int(sys.stdin.readline().strip())
    lst.append(num)


for i in range(1, N):
    for j in range(1, 1+i):
        if lst[i-j] > lst[i+1-j]:
            lst[i-j], lst[i+1-j] = lst[i+1-j], lst[i-j]


for i in range(N):
    print(lst[i])

'''

'''
#내장함수 - 메모리초과
import sys
N = int(input())
lst = []

for i in range(N):
    num = int(sys.stdin.readline().strip())
    lst.append(num)

lst.sort()
for i in range(N):
    print(lst[i])
'''
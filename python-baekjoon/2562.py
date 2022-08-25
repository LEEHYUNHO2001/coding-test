#https://www.acmicpc.net/problem/2562
#최댓값



#내장함수, 배열 사용
import sys

lst = []
for i in range(1, 10):
    lst.append(int(sys.stdin.readline().strip()))

print(max(lst))
print(lst.index(max(lst)) + 1)


'''
#배열 사용 X, max 직접 구함
import sys

max_num = 0
count=0

for i in range(1, 10):
    num = int(sys.stdin.readline().strip())
    count+=1
    if num > max_num:
        max_num = num
        max_count = count
print(max_num)
print(max_count)
'''
#https://www.acmicpc.net/problem/2750
#수 정렬하기

#삽입 정렬
N = int(input())
nums = []

for _ in range(N) : 
    nums.append(int(input()))

# Insert Sort
for i in range(1, len(nums)) :
    while (i>0) & (nums[i] < nums[i-1]) :
        nums[i], nums[i-1] = nums[i-1], nums[i]
        
        i -= 1
        
for n in nums : 
    print(n)



'''
#버블 정렬
import sys

N = int(input())
lst= []

for i in range(N):
    num = int(sys.stdin.readline().strip())
    lst.append(num)

for i in range(0, N):
    for j in range(0, N-1):
        if lst[j] > lst[j+1]:
            lst[j], lst[j+1] = lst[j+1], lst[j]

for i in range(N):
    print(lst[i])
'''
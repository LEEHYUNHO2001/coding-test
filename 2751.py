#https://www.acmicpc.net/problem/2751
#수 정렬하기 2

#퀵 정렬 -> 시간 초과
import sys

def Q(lst, left, right):
    if(left < right):
        a = left
        c = right
        p = lst[(left + right)//2]
        
        while a <= c:
            while lst[a] < p:
                a += 1
            
            while lst[c] > p:
                c -= 1
            
            if a <= c:
                lst[a], lst[c] = lst[c], lst[a]
                a += 1
                c -= 1

        Q(lst, left, c)
        Q(lst, a, right)

N = int(input())
lst = []

for i in range(N):
    num = int(sys.stdin.readline().strip())
    lst.append(num)

Q(lst, 0, N - 1)

for i in range(N):
    print(lst[i])

'''
#합병정렬 - 재귀 이용
import sys

def merge_sort(array):
    if len(array)<=1:
        return array
    
    # 재귀함수를 이용해서 끝까지 분할
    mid = len(array)//2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])

    i,j,k = 0,0,0

    # 분할된 배열끼리 비교
    while i<len(left) and j <len(right):
        if left[i]<right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1
        k+=1
    
    # 먼저 끝났을 때 
    if i==len(left):
        while j < len(right):
            array[k] = right[j]
            j+=1
            k+=1
    elif j==len(right):
        while i < len(left):
            array[k] = left[i]
            i+=1
            k+=1
    return array

N = int(input())
array = []

for i in range(N):
    num = int(sys.stdin.readline())
    array.append(num)

merge_array = merge_sort(array)

for i in merge_array:
    print(i)

'''
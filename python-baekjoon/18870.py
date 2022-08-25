#https://www.acmicpc.net/problem/18870
#좌표 압축
#중복 없애고 정렬 -> 자신의 인덱스가 순위

import sys

N = int(sys.stdin.readline())
lst = list(map(int, sys.stdin.readline().split()))

set_sort = sorted(list(set(lst)))
cnt = {set_sort[i] : i for i in range(len(set_sort))}

for i in lst:
    print(cnt[i], end = ' ')



'''
#시간초과
N = int(input())
lst = list(map(int, input().split()))

lst_set = sorted(set(lst), reverse=True)
cnt = {}

for i in range(len(lst_set)):
    cnt[lst_set[i]] = len(lst_set[i+1:])

for i in lst:
    print(cnt[i], end = ' ')
'''
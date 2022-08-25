#https://www.acmicpc.net/problem/2108
#통계학

def s_avg(lst):
    return round(sum(lst)/len(lst))

def middle(lst):
    middle_index = len(lst)//2
    return lst[middle_index]

def ch(lst):
    from collections import Counter
    mode_dict = Counter(lst)
    modes = [ k for k, v in mode_dict.items() if v == max(mode_dict.values())]
    modes = sorted(modes)
    if len(modes) > 1:
        return modes[1]
    return modes[0]

def ran(lst):
    return max(lst) - min(lst)

import sys
from collections import Counter

N = int(input())
lst = []

for i in range(N):
    num = int(sys.stdin.readline())
    lst.append(num)

lst.sort()

savg = s_avg(lst)
middle_num = middle(lst)
ch_num = ch(lst)
ran_num = ran(lst)
print(savg)
print(middle_num)
print(ch_num)
print(ran_num)
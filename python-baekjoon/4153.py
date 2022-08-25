#https://www.acmicpc.net/problem/4153
#직각삼각형

import sys

while True:
    lst = list(map(int, sys.stdin.readline().split()))
    if sum(lst) == 0: break
    c = lst.pop(lst.index(max(lst)))
    a = lst[0]
    b = lst[1]
    if a*a + b*b == c*c:
        print('right')
    else:
        print('wrong')
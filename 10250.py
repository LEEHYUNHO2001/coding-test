#https://www.acmicpc.net/problem/10250
#ACM 호텔
#거리 같을때 아래층 선호 -> 102호보다 301호 선호

import sys

T = int(input())

for i in range(0, T):
    h, w, n = map(int, sys.stdin.readline().split())
    cnt = 1
    result = 0
    while n > h:
        cnt += 1
        n -= h
    if cnt < 10:
        cnt = '0' + str(cnt)
    result = str(n) + str(cnt)
    print(result)



#다른풀이
'''
t = int(input())

for i in range(t):
    h, w, n = map(int, input().split())
    num = n//h + 1
    room = n % h
    if n % h == 0:  # h의 배수이면,
        num = n//h
        room = h
    print(f'{room*100+num}')
'''
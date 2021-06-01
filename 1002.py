#https://www.acmicpc.net/problem/1002
#터렛

import sys

T = int(input())

for i in range(0, T):
    x1, y1, r1, x2, y2, r2 = map(int, sys.stdin.readline().split())

    location = 0
    rs = r1 + r2
    rm = abs(r1 - r2)
    r = ((x1 - x2)**2 + (y1- y2)**2)**(1/2)


    if r == 0:
        if r1 == r2: #원이 겹칠 경우
            location = -1
        else: #원 중심은 같고 반지름이 다르면 만나지않음
            location = 0
    else:
        if r == rs or r == rm: #외접 또는 내접
            location = 1
        elif r < rs and r > rm: #원이 두 점에서 만나는 경우. 
            location = 2        #r > rm 조건없으면 원 두개 멀리 떨어져있는 경우 배제됨
        else:                  #원이 서로 멀리 떨어져 있는 경우
            location = 0
    
    print(location)
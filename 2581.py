#https://www.acmicpc.net/problem/2581
#소수

import math

M = int(input())
N = int(input())
dist = N - M
lst = []

for i in range(0, dist+1):
    num = 1
    cnt2 = 0
    if M == 2:
       lst.append(M) 
    elif M % 2 != 0:
        for j in range(0, M):
            num += 1
            if M != 1 and M % num == 0:
                cnt2 += 1
                
        if cnt2 == 1:
            lst.append(M)
    M += 1
if sum(lst) == 0:
    print(-1)
else:
    print(sum(lst))
    print(lst[0])



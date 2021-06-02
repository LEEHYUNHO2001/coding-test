#https://www.acmicpc.net/problem/1018
#체스판 다시 칠하기

import sys

N, M = map(int, input().split())
lst = []
lst2 = []
cnt = 0
for i in range(N):
    lst.append(sys.stdin.readline().strip())

for i in range(0, N - 7):
    for j in range(0, M -7):
        cnt1 = 0
        cnt2 = 0
        for k in range(i, i+8):
            for r in range(j, j+8):
                if (r + k) % 2 == 0:
                    if lst[k][r] == 'W':
                        cnt1 += 1
                    else: 
                        cnt2 += 1
                else:
                    if lst[k][r] == 'B':
                        cnt1 += 1
                    else:
                        cnt2 += 1
        lst2.append(cnt1)
        lst2.append(cnt2)
print(min(lst2))

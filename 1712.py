#https://www.acmicpc.net/problem/1712
#손익분기점

A, B, C = map(int, input().split())

if B>=C:
    BEP = -1
else:
    BEP = A//(C - B) + 1
print(BEP)
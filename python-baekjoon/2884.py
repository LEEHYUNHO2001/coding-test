#https://www.acmicpc.net/problem/2884
#알람

H, M = map(int, input().split())
early = 45
M-=early
if M<0:
    M+=60
    H-=1
    if H<0:
        H+=24

print(H, M)
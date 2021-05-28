#https://www.acmicpc.net/problem/2869
#달팽이는 올라가고 싶다

import math

a, b, v = map(int, input().split())
dal = 0
cnt = 1
new_v = v - a
cnt += math.ceil((new_v/(a-b)))
print(cnt)

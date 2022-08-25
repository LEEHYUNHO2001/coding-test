#https://www.acmicpc.net/problem/2231
#분해합

def s(N):
    lst = []
    trans = str(N)
    for i in range(len(trans)):
        lst.append(int(trans[i]))
    return sum(lst) + N

N = int(input())
num = 0

for i in range(1, N+1):
    num = i
    if s(num) == N:
        print(num)
        break
    if num == N:
        print(0)
        break
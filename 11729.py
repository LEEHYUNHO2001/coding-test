#https://www.acmicpc.net/problem/11729
#하노이 탑 이동 순서
#기둥의 역할은 변동된다.

N = int(input())

def hanoi(N, start, mid, end):
    if N == 1:
        print(start, end)
    else:
        hanoi(N-1, start, end, mid)
        print(start, end)
        hanoi(N-1, mid, start, end)

#최단경로
sum = 1
for i in range(1, N):
    sum = sum*2 + 1

print(sum)
hanoi(N, 1, 2, 3)
    

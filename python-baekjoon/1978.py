#https://www.acmicpc.net/problem/1978
#소수 찾기

N = int(input())
lst = list(map(int, input().split()))
cnt = 0

for i in range(0, len(lst)):
    num = 1
    cnt2 = 0
    for j in range(0, lst[i]):
        num += 1
        if lst[i] == 2:
            cnt += 1
            break
        elif lst[i] != 1 and lst[i] % num == 0:
            cnt2 += 1
        
    if cnt2 == 1:
        cnt += 1
print(cnt)
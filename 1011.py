#https://www.acmicpc.net/problem/1011
#Fly me to the Alpha Centauri

T = int(input())
cnt = 0
lst = [-1, 0, 1]

while T > 0:
    cnt += 1
    T -= lst[2]

    if T == lst[1]:
        cnt += 1
        break
    lst[0] += 1
    lst[1] += 1
    lst[2] += 1
    print(T)

    
print(cnt)
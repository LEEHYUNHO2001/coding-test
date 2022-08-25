#https://www.acmicpc.net/problem/2798
#블랙잭

def black(lst):

    lst2 = []
    lst3 = []
    for i in range(0, N-1):
        for j in range(1 + i, N):
            lst2.append(lst[i] + lst[j])
        for k in range(0, len(lst2)):
            for r in range(i+2+k, N):
                if M - (lst2[k] + lst[r]) >= 0:
                    lst3.append(M - (lst2[k] + lst[r]))
        lst2 = []
    print(M - min(lst3))


N, M = map(int, input().split())
lst = list(map(int, input().split()))

black(lst)

'''
#좋은 풀이
N, M = map(int, input().split())
lst = list(map(int, input().split()))
result = 0
for i in range(N):
    for j in range(i+1, N):
        for k in range(j+1, N):
            black = lst[i] + lst[j] + lst[k]
            if black > M:
                continue
            else:
                result = max(result, black)
print(result)
'''
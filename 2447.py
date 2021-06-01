#https://www.acmicpc.net/problem/2447
#별 찍기 -10

def get_stars(star):
    matrix = []
    for i in range(3 * len(star)):
        if i // len(star) == 1:
            matrix.append(star[i % len(star)] + " " * len(star) + star[i % len(star)])
        else:
            matrix.append(star[i % len(star)] * 3)
    return matrix
 
 
star = ["***", "* *", "***"]
n = int(input())
e = int(n**(1/3))
 
for i in range(1, e):
    star = get_stars(star)
for i in star:
    print(i)
print(star)


'''
def star(cnt_):
    global lst
    idx = [i for i in range(N) if (i // (3 **cnt_))%3 == 1]
    for i in idx:
        for j in idx:
            lst[i][j] = ' '

N = int(input())

lst = [['*']*N for _ in range(N)] # N X N 2차원 배열 생성
cnt = int(N**(1/3))

for cnt_ in range(cnt):
    star(cnt_)

for i in range(0, N):
    for j in range(0, N):
        print(lst[i][j], end = '')
    print()

'''
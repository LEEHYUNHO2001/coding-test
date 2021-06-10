#https://www.acmicpc.net/problem/1427
#소트인사이드

def sort_inside(N):
    lst = []
    chrN = str(N)
    for i in chrN:
        lst.append(int(i))

    lst.sort(reverse=True)

    for i in range(len(lst)):
        print(lst[i], end='')


N = int(input())
sort_inside(N)
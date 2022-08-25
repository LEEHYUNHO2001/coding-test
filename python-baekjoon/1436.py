#https://www.acmicpc.net/problem/1436
#영화감독 숌
#문제 이해하기

def change(N):
    six_str = '666'
    six = 666
    cnt = 0

    while True:
        if six_str in str(six):
            cnt += 1
        
        if N == cnt:
            print(six)
            break
        six += 1


N = int(input())

change(N)

#https://www.acmicpc.net/problem/1929
#소수 구하기

def isPrime(num):
    if num == 1:
        return False
    else:
        for i in range(2, int(num**(1/2))+1):
            if num % i == 0:
                return False
        return True

M, N = map(int, input().split())

for i in range(M, N+1):
    if isPrime(i):
        print(i)
#https://www.acmicpc.net/problem/9020
#골드바흐의 추측

import sys

def isPrime(num):
    for i in range(2, int(num**(1/2)) + 1):
        if num % i == 0:
            return False
    else:
        return True

prime = []

for i in range(2, 10000):
    if isPrime(i):
        prime.append(i)


T = int(input())

for i in range(0, T):
    n = int(sys.stdin.readline().strip())
    a = 0
    b = 0
    if n > 3 and n % 2 == 0:
        half = n // 2
        if half in prime:
            a = half
            print(a, a)
        else:
            while n > 0:
                half -= 1
                if half in prime:
                    if n - half in prime:
                        a = half
                        b = n - half
                        break
            print(a, b)

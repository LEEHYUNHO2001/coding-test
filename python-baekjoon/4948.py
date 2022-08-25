#https://www.acmicpc.net/problem/4948
#베르트랑 공준
#시간초과 주의! -> 1 <= n <= 123456 이므로 2~2*123456까지 소수 미리 구하자.
import sys

def isPrime(num):
    if num == 1:
        return False
    else:
        for i in range(2, int(num**(1/2)) + 1):
            if num % i ==0:
                return False
        return True

accept = 123456
Num_list = list(range(2, 2*accept))
prime_list = []
for i in Num_list:
    if isPrime(i):
        prime_list.append(i)


while True:
    n = int(sys.stdin.readline())
    if n == 0:
        break
    cnt = 0

    for i in prime_list:
        if n < i <= 2*n:
            cnt += 1

    print(cnt)
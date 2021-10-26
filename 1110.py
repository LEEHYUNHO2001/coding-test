#https://www.acmicpc.net/problem/1110
#더하기 사이클
'''
#방법1
N = int(input())
result = N
count = 0

while True:
    first = result//10
    second = result%10
    sumRight = (first + second)%10
    result = (second*10) + sumRight
    count+=1
    if N == result:
        break
print(count)
'''

#방법2
N = int(input())
original = N
cnt = 0

while True:
    cnt+=1
    try:
        first = N // 10
        second = N % 10
        N = first + second
        if N >= 10:
            N = N % 10
        N = second * 10 + N
        if N == original:
            break;
    except:
        N = 10*N + N
print(cnt)








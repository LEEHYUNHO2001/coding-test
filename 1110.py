#https://www.acmicpc.net/problem/1110
#더하기 사이클

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
#방법2 -> 시간 초과
N = input()
result = N
count = 0

while True:
    if int(result)<10:
        result = '0'+result
    result = result[1] + str((int(result[0]) + int(result[1]))%10)
    count+=1
    if N == result:
        break
print(count)
'''







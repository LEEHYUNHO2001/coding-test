#https://www.acmicpc.net/problem/2292
#벌집

#1 6 12 18 24

N = int(input())
n = 6
N -= 1
cnt = 1

while N > 0:
    cnt += 1
    if N > n:
        N = N - n
        n = 6 * cnt
    else:
        break
print(cnt)


'''
N = int(input())
room = 1
stack_six = 6
num = 1
if N == 1:
    room = 1
else :
    while True:
        num += stack_six
        stack_six += 6
        room += 1
        if N <= num:
            break
print(room)
'''
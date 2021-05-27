#https://www.acmicpc.net/problem/2292
#벌집

#1 6 12 18 24

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
N = int(input())
cnt = 1
room = 1
cnt_six = 6

while N > cnt:
    room += 1
    cnt += cnt_six
    cnt_six += 6

print(room)
'''
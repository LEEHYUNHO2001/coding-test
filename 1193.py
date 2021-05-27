#https://www.acmicpc.net/problem/1193
#분수찾기

X = int(input())
bun_max = 1
stack_num = 2
num = 1

if X == 1:
    print('1/1')
else:
    while True:
        num += stack_num
        stack_num += 1
        bun_max += 1
        if X <= num:

            print('{}/{}'.format(bun_max-1, bun_max))

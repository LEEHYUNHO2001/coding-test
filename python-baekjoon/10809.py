#https://www.acmicpc.net/problem/10809
#알파벳 찾기


S = input()
alphbet = list(range(97, 123))

for i in alphbet:
    print(S.find(chr(i)), end=" ")

'''
#find 안쓰기
S = input()
alphbet = 'abcdefghijklmnopqrstuvwxyz'

for i in alphbet:
    if i in S:
        print(S.index(i), end=" ")
    else:
        print(-1, end=" ")
'''
#https://www.acmicpc.net/problem/5622
#다이얼

word = input()
count = 0

for i in word:
    count += 2
    if i in 'ABC':
        count += 1
    elif i in 'DEF':
        count += 2
    elif i in 'GHI':
        count += 3
    elif i in 'JKL':
        count += 4
    elif i in 'MNO':
        count += 5
    elif i in 'PQRS':
        count += 6
    elif i in 'TUV':
        count += 7
    elif i in 'WXYZ':
        count += 8
    else:
        count += 9
print(count)

'''
dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
a = input()
ret = 0
for j in range(len(a)):
    for i in dial:
        if a[j] in i:
            ret += dial.index(i)+3
print(ret)
'''
#https://www.acmicpc.net/problem/1193
#분수찾기

X = int(input())

line = 0
total_cnt = 0
ja = 1
mo = 1

while total_cnt < X:
    line += 1
    total_cnt += line

real = X - (total_cnt - line)

if line % 2 ==0:
    ja = real
    mo = line - real + 1
else:
    ja = line - real + 1
    mo = real
print(ja, '/', mo, sep='')


'''
#답지
X = int(input())
line = 1
ja = 1
mo = 1
while X > line:
    X -=  line
    line += 1
    if line % 2 == 0:
        ja = X
        mo = line - X + 1
    else :
        ja = line - X + 1
        mo = X
print(ja, '/', mo, sep='')
'''
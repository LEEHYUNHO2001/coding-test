#https://www.acmicpc.net/problem/2908
#상수

num = input().split()
new_num = []

for i in range(0, 2):
    new_word = ''
    for j in range(1, len(num[i])+1):
        new_word += num[i][len(num[i])-j]
    new_num.append(int(new_word))

print(max(new_num))

'''
num1, num2 = input().split()
num1 = int(num1[::-1])  # [::-1] : 역순
num2 = int(num2[::-1])

if num1 > num2:
    print(num1)
else :
    print(num2)
'''
#https://www.acmicpc.net/problem/9498
#시험 성적

result = int(input())
if 90<=result<=100:
    print('A')
elif 80<=result<=89:
    print('B')
elif 70<=result<=79:
    print('C')
elif 60<=result<=69:
    print('D')
else:
    print('F')
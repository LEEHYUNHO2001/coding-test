M = int(input())
lst = list(map(int, input().split()))
len_lst = len(lst)
Sum = 0
i = 0
j = 1

while True:
    Sum = sum(lst[i:j])
    if Sum < M:
        j+=1
    elif Sum > M:
        i+=1
    elif Sum == M:
        print('success')
        break
    if j == len_lst:
        print('failed')
        break
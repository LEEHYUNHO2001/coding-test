#https://www.acmicpc.net/problem/4673
#셀프 넘버

all = set(range(1, 10000))
dn = set()

for i in range(1, 10000):
    for j in str(i):
        i += int(j)
    dn.add(i)
self_num = all - dn


for i in sorted(self_num):
    print(i)
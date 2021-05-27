#https://www.acmicpc.net/problem/1316
#그룹 단어 체커

import sys

N = int(input())
group_word = 0

for i in range(0, N):
    word = str(sys.stdin.readline().strip())
    count = 1
    for j in range(0, len(word)-1):
        if word[j] != word[j+1]:
            count += 1
    if count == len(set(word)):
        group_word += 1

print(group_word)
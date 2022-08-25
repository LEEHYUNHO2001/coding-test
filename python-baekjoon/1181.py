#https://www.acmicpc.net/problem/1181
#단어 정렬

import sys

N = int(input())
lst = []
lst_len = []

for i in range(N):
    word = sys.stdin.readline().strip()
    if word in lst:
        continue
    else:
        lst.append(word)

for i in range(len(lst)):
    lst_len.append([len(lst[i]), lst[i]])

lst_len.sort()

lst_len.sort()

for i in range(len(lst)):
    print(lst_len[i][1])

'''
#다른 풀이
words_num = int(input())
words_list = []

for _ in range(words_num):
    word = str(input())
    word_count = len(word)
    words_list.append((word, word_count))

#중복 삭제
words_list = list(set(words_list))

#단어 숫자 정렬 > 단어 알파벳 정렬
words_list.sort(key = lambda word: (word[1], word[0]))

for word in words_list:
    print(word[0])
'''
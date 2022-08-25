#https://www.acmicpc.net/problem/1157
#단어 공부


word = input().upper()
set_word = set(word)
max = 0
max_word = 0

for i in set_word:
    num = word.count(i)
    if num == max:
        max_word = '?'
    if num > max:
        max = num
        max_word = i
print(max_word)

'''
#index, set 이용
word = input().upper()
unique_word = list(set(word))
cnt_list = []

for i in unique_word:
    cnt = word.count(i)
    cnt_list.append(cnt)
if cnt_list.count(max(cnt_list)) > 1:
    print('?')
else:
    max_index = cnt_list.index(max(cnt_list))
    print(unique_word[max_index])
'''
#https://www.acmicpc.net/problem/2941
#크로아티아 알파벳

word = input()
kro_word = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
new_word = word

for j in kro_word:
    if j in new_word:
        new_word = new_word.replace(j, '1')
print(len(new_word))
def z(s, i):
    lst = []
    j = 0
    cnt = 0
    while j < len(s):
        lst.append(s[j:j+i])
        j += i
    
    lst2 = lst.copy()

    for k in range(len(lst) -1):
        if lst[k] == lst[k+1]:
            cnt += 1
            lst2.pop(0)
            if k + 1 == len(lst) - 1:
                lst2.append('A')
        else:
            if cnt > 0:
                lst2.append('A')
            cnt = 0
    result = ''.join(map(str, lst2))
    
    return len(result)

def solution(s):
    answer = len(s)
    result = 0
    
    if len(s) == 1:
        return 1
    
    for i in range(1, len(s)):
        result = z(s ,i)
        if result < answer:
            answer = result
    
    return answer
def z(s, i):
    lst = []
    j = 0
    cnt = 0
    
    #i만큼 잘라서 배열로 저장
    while j < len(s):
        lst.append(s[j:j+i])
        j += i
    lst2 = lst.copy()
    
    for k in range(len(lst) -1):
        if lst[k] == lst[k+1]:
            cnt += 1
            lst2.pop(0)
            #마지막 문자까지 같을경우
            if k + 1 == len(lst) - 1:
                #10개면 2개, 100개면 3개 추가
                num = len(str(cnt+1))
                for j in range(num):
                    lst2.append('A')
        else:
            #같은거 있어서 pop된 상태에서 다른거 나왔을 경우
            if cnt > 0:
                #10개면 2개, 100개면 3개 추가
                num = len(str(cnt+1))
                for j in range(num):
                    lst2.append('A')
                
            cnt = 0
            
    result = ''.join(map(str, lst2))
    
    return len(result)

def solution(s):
    answer = []
    
    if len(s) == 1:
        return 1
    
    for i in range(1, len(s)//2 + 1):
        answer.append(z(s ,i))

    
    return min(answer)
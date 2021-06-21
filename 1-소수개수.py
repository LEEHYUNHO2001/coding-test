def solution(n):
    answer = 0
    no_answer = 0
    
    for i in range(1, n + 1):
        if i == 1:
            no_answer += 1
        elif i != 2 and i % 2 == 0:
            no_answer += 1
        else:
            for j in range(2, int(i**(1/2))+1):
                if i % j == 0:
                    no_answer += 1
                    break
    answer = n - no_answer
    
    return answer
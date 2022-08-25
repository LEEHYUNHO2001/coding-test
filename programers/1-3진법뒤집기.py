def solution(n):
    answer = []
    while n:
        n, rest = divmod(n, 3)
        answer.append(rest)
        
    for i in range(len(answer)):
        if answer[i] != 0:
            answer[i] = answer[i]*(3**(len(answer) - 1 - i))
    return sum(answer)
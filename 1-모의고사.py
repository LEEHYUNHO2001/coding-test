def solution(answers):
    answer = []
    one = [1, 2, 3, 4, 5]*2000
    two = [2, 1, 2, 3, 2, 4, 2, 5]*1500
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]*1000
    o = 0
    t = 0
    th = 0
    for i in range(len(answers)):
        if answers[i] == one[i]:
            o += 1
        if answers[i] == two[i]:
            t += 1
        if answers[i] == three[i]:
            th += 1
    count = [o, t, th]
    
    for per, sco in enumerate(count):
        if sco == max(count):
            answer.append(per + 1)
    
    return answer
    
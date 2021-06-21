def solution(progresses, speeds):
    import math
    answer = []
    day = [ math.ceil((100 - x)/y) for x, y in zip(progresses, speeds)]
    
    while len(day) != 0:
        cnt = 1
        a = day.pop(0)
        day_c = day.copy()
        for i in range(len(day)):
            if a >= day[i]:
                cnt += 1
                day_c.pop(0)
            else:
                break
        answer.append(cnt)
        day = day_c
    
    return answer
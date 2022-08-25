def solution(n, lost, reserve):
    cnt = 0
    real_reserve = list(set(reserve) - set(lost))
    real_lost = list(set(lost)- set(reserve))
    for i in real_lost:
        
        if (i - 1) in real_reserve:
            real_reserve.pop(real_reserve.index(i - 1))
        elif (i + 1) in real_reserve:
            real_reserve.pop(real_reserve.index(i + 1))
        else:
            cnt += 1
    answer = n - cnt
    return answer
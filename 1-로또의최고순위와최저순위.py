def solution(lottos, win_nums):
    cnt1 = 0
    cnt2 = 0
    for i in lottos:
        if i in win_nums:
            cnt1 += 1
        elif i == 0:
            cnt2 += 1
    if cnt1 == 0:
        cnt1 += 1
    up = 7 - (cnt1 + cnt2)
    down = 7 - cnt1
    answer = [up, down]
    if cnt2 == 6:
        answer = [1, 6]
        
    return answer
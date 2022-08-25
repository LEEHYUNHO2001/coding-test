def solution(numbers, hand):
    answer = ''
    startL = 10
    startR = 12
    
    for i in numbers:
        if i in [1, 4, 7]:
            answer += 'L'
            startL = i
        elif i in [3, 6, 9]:
            answer += 'R'
            startR = i
        else:
            if i == 0:
                i = 11
            absL = abs(startL - i)
            absR = abs(startR - i)
            
            if sum(divmod(absL, 3)) > sum(divmod(absR, 3)):
                answer += 'R'
                startR = i
            elif sum(divmod(absL, 3)) < sum(divmod(absR, 3)):
                answer += 'L'
                startL = i
            else:
                if hand == 'right':
                    answer += 'R'
                    startR = i
                else:
                    answer += 'L'
                    startL = i
    return answer
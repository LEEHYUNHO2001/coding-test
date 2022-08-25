#한명 빼고는 모두 완주한 상황
#해시
def solution(part, com):
    from collections import Counter
    part.sort()
    com.sort()
    result = Counter(part) - Counter(com)
    return list(result)[0]

'''
#시간초과
def solution(participant, completion):
    answer = participant.copy()
    for i in completion:
        answer.pop(answer.index(i))
        
    return ''.join(answer)
'''
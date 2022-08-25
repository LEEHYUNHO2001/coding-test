def solution(priorities, location):
    answer=0
    while (len(priorities)):
        if location==0:
            if priorities[0]<max(priorities):
                priorities.append(priorities.pop(0))
                location=len(priorities)-1
            else:
                return answer+1
        else:
            if priorities[0]<max(priorities):
                priorities.append(priorities.pop(0))
                location-=1
            else:
                priorities.pop(0)
                location-=1
                answer+=1

'''
#deque이용
from collections import deque
def solution(priorities, location):
    answer = 0
    
    d = deque([(v,i) for i,v in enumerate(priorities)])

    while len(d):
        item = d.popleft()
        if d and max(d)[0] > item[0]:
            d.append(item)
        else:
            answer += 1
            if item[1] == location:
                break
    return answer
'''
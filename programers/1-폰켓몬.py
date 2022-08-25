def solution(nums):
    answer = 0
    N = len(nums)//2
    nums_set = set(nums)
    N_set = len(nums_set)
    
    if N >= N_set:
        answer = N_set
    else:
        answer = N
    return answer
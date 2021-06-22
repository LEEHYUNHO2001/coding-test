
def solution(n):
    answer = ''
    while n > 0:
        n -= 1
        answer = '124'[n%3] + answer
        n //= 3
    return answer

'''
#재귀
def solution(n):
    array = ['1', '2', '4']
    
    if n <= 3:
        return array[n-1]
    else:
        div, mod = divmod(n-1, 3)
        return solution(div) + array[mod]
'''
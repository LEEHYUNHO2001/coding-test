from itertools import permutations

#소수 판별
def isPrime(num):
    if num == 1:
        return False
    elif num == 0:
        return False
    else:
        for i in range(2, int(num**(1/2))+1):
            if num % i == 0:
                return False
        return True

    
def solution(numbers):
    answer = []
    for k in range(1, len(numbers)+1):
        perlist = list(map(''.join, permutations(list(numbers), k)))
        for i in list(set(perlist)):
            if isPrime(int(i)):
                answer.append(int(i))

    answer = len(set(answer))
    return answer
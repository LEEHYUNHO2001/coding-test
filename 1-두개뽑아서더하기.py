def solution(numbers):
    answer = []
    numbers.sort()
    for i in range(len(numbers)-1):
        for j in numbers[i+1:]:
            if numbers[i]+j not in answer:
                answer.append(numbers[i]+j)
    return sorted(answer)
def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)-1):
        if phone_book[i] in phone_book[i+1][:len(phone_book[i])]:
            return False
    return answer



'''
#시간초과
def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)):
        num1 = phone_book[i]
        cnt = -1
        for j in range(i, len(phone_book)):
            num2 = phone_book[j]
            if len(num1) > len(num2):
                continue
            if num1 in num2[:len(num1)]:
                cnt += 1
            if cnt > 0:
                return False
    return answer
'''
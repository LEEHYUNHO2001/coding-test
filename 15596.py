#https://www.acmicpc.net/problem/15596
#정수 N개의 합
#a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열
'''
def solve(a):
    return sum(a)
'''
def solve(a):
    sum = 0
    for i in a:
        sum += i
    return sum
#https://www.acmicpc.net/problem/3009
#네 번째 점

def solo(one, two, three):
    if one == two:
        return three
    elif two == three:
        return one
    else:
        return two

a, b = map(int, input().split())
c, d = map(int, input().split())
e, f = map(int, input().split())

h = solo(a, c, e)
i = solo(b, d, f)
print(h, i)
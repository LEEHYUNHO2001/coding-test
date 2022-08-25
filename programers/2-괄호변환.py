def uv(p):
    o = 0
    c = 0
    for i in range(len(p)):
        if p[i] == "(":
            o += 1
        else:
            c += 1
        if o == c:
            return p[:i+1], p[i+1:]

def check(u):
    stack = []
    
    for i in u:
        if i == "(":
            stack.append(i)
        else:
            if not stack:
                return False
            stack.pop()
    return True

        
def solution(p):
    
    if not p:
        return ""
    
    u, v = uv(p)
    
    if check(u):
        return  u + solution(v)
    else:    
        answer = "("
        answer += solution(v)
        answer += ")"
        
        
        for i in u[1:len(u) - 1]:
            if i == "(":
                answer += ")"
            else:
                answer += "("
    return answer
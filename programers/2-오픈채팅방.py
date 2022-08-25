def solution(record):
    answer = []
    dic = {}
    lst = []
    
    for i in range(len(record)):
        string = str(record[i]).split()
        lst.append(string)
        
    for i in range(len(record)):
        if lst[i][0] == "Enter":
            dic[lst[i][1]] = lst[i][2]
        if lst[i][0] == "Change":
            dic[lst[i][1]] = lst[i][2]
    
    for i in range(len(record)):
        if lst[i][0] == "Enter":
            answer.append(dic[lst[i][1]] + '님이 들어왔습니다.')
        elif lst[i][0] == "Leave":
            answer.append(dic[lst[i][1]] + '님이 나갔습니다.')
    
    return answer
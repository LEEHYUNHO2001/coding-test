def solution(board, moves):
    answer = 0
    lst = []
    box = []
    
    for i in moves:
        pick = i - 1
        for j in range(len(board)):
            if board[j][pick] > 0:
                lst.append(board[j][pick])
                board[j][pick] = 0
                break
    i = 0
    while i < len(lst) - 1:
        if lst[i] == lst[i+1]:
            del lst[i], lst[i]
            i = 0
            answer += 2
        else:
            i += 1
    return answer
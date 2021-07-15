function solution(maps) {
    //남서북동
    const dy = [1, 0, -1, 0];
    const dx = [0, -1, 0, 1];
    const row = maps.length;
    const col = maps[0].length;
    
    //맵을 1로 초기화
    const visit = [...maps].map((r) => r.map((c) => 1))
    
    //시작점
    const queue = [[0, 0]];
    
    //BFS
    while(queue.length){
        const [y, x] = queue.shift();
        for(let k = 0; k < 4; k++){
            const ny = y + dy[k];
            const nx = x + dx[k];
            
            if(ny >= 0 && nx >= 0 && ny < row && nx < col) {

                if(maps[ny][nx] === 1 && visit[ny][nx] === 1) {
                    visit[ny][nx] = visit[y][x] + 1;
                    queue.push([ny,nx]);
                }
            }
        }
    }
    
    return visit[row-1][col-1] === 1 ? -1 : visit[row-1][col-1];
}
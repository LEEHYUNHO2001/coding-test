function solution(str_list) {
    let sliceIndex = -1;
    let type = "";

    str_list.some((char, index) => {
        if (char === "r" || char === "l") {
            type = char;
            sliceIndex = index
            return true;
        }
    });

    if (type === "" || sliceIndex === -1) {
        return [];
    }


    return type === "l" ? str_list.slice(0, sliceIndex) : str_list.slice(sliceIndex + 1);
}
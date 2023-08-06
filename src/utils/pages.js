export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let arrResult = [];
    for(let i = 0; i < totalPages; i++){
        arrResult.push(i + 1);
    }
    return arrResult;
}
export const getPageCount = (totalCount:number, limit:number) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (pageCount:number) => {
    let result = [];
    for (let i = 1; i <= pageCount; i++) {
      result.push(i);
    }
    return result;
}
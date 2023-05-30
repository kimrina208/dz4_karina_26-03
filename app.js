const arr = [null,123,undefined,null, "qwerty", 34, 65, undefined, null,null, 43, "aerg","пкцйк", null, 'uioo'];

const result = {};
arr.forEach(item =>
{
    const type = typeof item
    if (result[type]) result[type].push(item);
    else result[type] = [item];
})
console.log(result);
const sortedKeys = Object.keys(result).sort((a,b) =>result[b].lenth - result[a].length);
const sortedResult = sortedKeys.map(key=> result[key]);
console.log(sortedResult);
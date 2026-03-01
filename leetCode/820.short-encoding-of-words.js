var minimumLengthEncoding = function(words) {
    let wordSets = new Set(words);
    for(let word of words) {
        for (let i = 1; i < word.length; i++) {
            let suffix = word.substring(i)
            wordSets.delete(suffix)
        }
    }
    let totalLength = 0;
    for(let word of wordSets) {
        totalLength += word.length+1
    }
    return totalLength
};
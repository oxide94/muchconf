function map(dest, source, fn) {
    let modifier = fn;
    if(typeof fn !== 'function') {
        modifier = (a) => { a }; 
    }

    for(let i in source) {
        if(typeof source[i] === 'object') {
            if(Array.isArray(source[i])) {
                dest[i] = [];
            } else {
                dest[i] = {};
            }
            map(dest[i], source[i], modifier);
        } else {
            dest[i] = modifier(source[i]);
        }
    }
}

module.exports = map;
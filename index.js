function clone(item) {
    // Clones an array or object using the spread syntax
    return JSON.parse(JSON.stringify(item));
}

module.exports = clone;

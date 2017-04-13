function minOfTwo(a, b) {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b, c) {
    return minOfTwo(a, minOfTwo(b, c));
}

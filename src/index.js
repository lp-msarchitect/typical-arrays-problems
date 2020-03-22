exports.min = function min(array = null) {
    if (array === null || array.length === 0) {
        return 0;
    }
    return array.reduce((minItem, currentItem) => {
        return minItem > currentItem ? currentItem : minItem;
    });
};

exports.max = function max(array = null) {
    if (array === null || array.length === 0) {
        return 0;
    }
    return array.reduce((maxItem, currentItem) => {
        return maxItem < currentItem ? currentItem : maxItem;
    });
};

exports.avg = function avg(array = null) {
    if (array === null || array.length === 0) {
        return 0;
    }
    const sum = array.reduce((sum, currentItem) => {
        return sum + currentItem;
    }, 0);
    return sum / array.length;
};

// 找出百分之几的数
var data = [10,3,5,4,1,2,7,9,8,6];
function insertElement(container, element, size) {
    var copy = [...container];
    for (var i = 0; i < copy.length; i++) {
        if (element >= copy[i]) {
            copy.splice(i, 0, element);
            return copy.slice(0, size);
        }
    }
    if (copy.length < size) {
        copy.push(element)
    }
    return copy;
}

function fun(data, percent) {
    var size, length = data.length;
    if (!length || !percent) {
        return;
    }
    size = Math.round(length * percent);
    var container = [];
    for (var i = 0; i < length; i++) {
        container = insertElement(container, data[i], size);
        console.log(container);
    }
    return container[container.length - 1];
}

console.log(fun(data, 0.4))
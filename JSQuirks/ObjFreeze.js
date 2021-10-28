/*
    Object.freeze 
    prevents adding new props,
    prevents removing props,
    prevents changing enumerability, congigurabilty, writability
*/
const obj1 = {
    internal: {}
};

Object.freeze(obj1);
obj1.internal.a = { a: 'aValue' };
console.log(obj1.internal)


Object.freeze = function (obj) {
    var props = Object.getOwnPropertyNames(obj);

    for (var i = 0; i < props.length; i++) {
        var desc = Object.getOwnPropertyDescriptor(obj, props[i]);

        if ("value" in desc) {
            desc.writable = false;
        }

        desc.configurable = false;
        Object.defineProperty(obj, props[i], desc);
    }

    return Object.preventExtensions(obj);
};
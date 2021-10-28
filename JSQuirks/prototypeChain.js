/*
    JavaScript objects are dynamic "bags" of properties
    (referred to as own properties).
    JavaScript objects have a link to a prototype object.
    When trying to access a property of an object,
    the property will not only be sought on the object
    but on the prototype of the object, the prototype
    of the prototype, and so on until either a property
    with a matching name is found or the end of the
    prototype chain is reached.
 */


let obj = {
    name: 'venu',
    city: 'Hyderabad'
}
let obj2 = {
    name: 'Hercules',
}

obj2.__proto__ = obj;
obj2.name // Hercules
obj2.city // Hyderabad
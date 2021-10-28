Array.prototype.customReverse1 = function () {
    const length = this.length;
    for (let index = 0; index < Math.floor(this.length/2); index++) {
        const temp = this[index];
        this[index] = this[this.length - index - 1];
        this[this.length - index - 1] = temp;
    }
    return this;
}

Array.prototype.customReverse = function () {
    const swap = (i,j) => {
        const tmp = this[i];
        this[i] = this[j]
        this[j] = tmp;
    }
    const length = this.length;
    for (let index = 0; index < Math.floor(this.length/2); index++) {
        swap(index, this.length - index - 1);
    }
    return this;
}

let array = [1,2,3,4,5]
array.customReverse();
console.log(array)
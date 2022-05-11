class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.unshift(item);
        return this;
    }

    pop() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.join(',');
    }

    fromString(str) {
        this.items = str.split(',');
        return this;
    }
}

exports.Stack = Stack;
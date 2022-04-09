class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

    find(value) {
        let current = this.head;
        while (current != null) {
            if (current.value === value)
                return current;
            current = current.next;
        }
        return null;
    }

    delete(value) {
        if (this.head === null)
            return this;
        if (this.head.value === value)
            this.head = this.head.next;
        let current = this.head;
        let last = this.head;
        while (current != null) {
            if (current.next && current.next.value === value) {
                last = current;
                current.next = current.next.next;
            }
            current = current.next;
        }
        if (this.tail.value === value)
            this.tail = last;
        return this;
    }

    toArray() {
        let current = this.head;
        let arr = [];
        while (current != null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
    fromArray(arr) {
        for (let value of arr) {
            this.append(value);
        }
        return this;
    }

    toString() {
        return this.toArray().join(',');
    }

    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.toArray().length;
    }

}
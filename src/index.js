class Sorter {
    constructor() {
        this.arr = [];
        this.DefaultComparator = (a, b) => a - b;
        this.compareFunction = this.DefaultComparator;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr.slice();
    }

    sort(indices) {
        // your implementation
        let i = 0;
        let arr = [];
        for (i = 0; i < indices.length; i++) {
            arr.push(this.arr[indices[i]]);
        }
        arr.sort(this.compareFunction);
        indices.sort(function (x, y) {
            return x - y
        });
        for (i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = arr[i];
        }
    }

    setComparator(compareFunction) {
        // your implementation
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;
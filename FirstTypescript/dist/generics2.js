"use strict";
var Store = /** @class */ (function () {
    function Store() {
        this.arr1 = [];
    }
    Store.prototype.addElement = function (element) {
        this.arr1.push(element);
    };
    Store.prototype.removeElement = function (element) {
        console.log(this.arr1.indexOf(element));
        this.arr1.splice(this.arr1.indexOf(element), 1);
    };
    Store.prototype.viewElements = function () {
        console.log(this.arr1);
    };
    return Store;
}());
var stringStore = new Store();
var numberStore = new Store();
var objectStore = new Store();
stringStore.addElement("one");
stringStore.addElement("two");
stringStore.addElement("three");
stringStore.removeElement("two");
stringStore.viewElements();

class Store<T> {
  private arr1: T[] = [];

  addElement(element: T) {
    this.arr1.push(element);
  }

  removeElement(element: T) {
    console.log(this.arr1.indexOf(element));
    this.arr1.splice(this.arr1.indexOf(element), 1);
  }

  viewElements() {
    console.log(this.arr1);
  }
}

const stringStore = new Store<string>();
const numberStore = new Store<number>();
const objectStore = new Store<object>();

stringStore.addElement("one");
stringStore.addElement("two");
stringStore.addElement("three");
stringStore.removeElement("two");
stringStore.viewElements();

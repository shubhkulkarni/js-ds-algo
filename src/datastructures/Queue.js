class Queue {
  constructor() {
    this.queue = [];
  }

  add(...args) {
    this.queue = [...args, ...this.queue];
    //this.queue.unshift(...args);
  }

  remove() {
    this.queue = this.queue.slice(0, this.queue.length - 1);
    //return this.queue.pop();
    return this.queue;
  }
}

const q = new Queue();

q.add(3);
q.add(4);
q.add(5);
q.remove();
console.log(q);

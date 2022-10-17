const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return { value: this.value, next: this.next };
  }

  enqueue(value) {
    if (this.next) {
      let data = this;

      for (; data.next;) {
        if (!data.next.next) {
          data.next.next = new ListNode(value);
          break;
        }
        data = data.next;
      }
    } else {
      if (this.value) {
        this.next = new ListNode(value);
      } else {
        this.value = value;
      }
    }
  }

  dequeue() {
    if (this.next) {
      let currentValue = this.value;
      this.value = this.next.value;
      this.next = this.next.next;

      return currentValue;
    } else {
      if (this.value) {
        let currentValue = this.value;
        this.value = null;

        return currentValue;
      } else {
        return null;
      }
    }
  }
}

module.exports = {
  Queue
};

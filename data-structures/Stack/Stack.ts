class Node<T> {
  public value: T;
  public previous?: Node<T> = undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export default class Stack<T> {
  public length: number;
	private head?: Node<T>;
    

  constructor() {
		this.head = undefined;
		this.length = 0;
  }

  push(item: T): void {
		const newItem = new Node(item);
		if (!this.head) {
			this.head = newItem;
		} else {
			newItem.previous = this.head
			this.head = newItem;
		}
		this.length++
	}
  
	pop(): T | undefined {
		this.length = Math.max(0, this.length - 1);

		if (this.length === 0) {
			const head = this.head;
			this.head = undefined;
			return head?.value
		} else {
			const head = this.head;
			this.head = head?.previous;
			return head?.value;
		}
	}
  
	peek(): T | undefined {
		return this.head?.value;
	}
}
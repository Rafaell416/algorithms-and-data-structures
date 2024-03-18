class ListNode<T> {
	value: T;
	next: ListNode<T> | null;

	constructor(value: T) {
			this.value = value;
			this.next = null;
	}
}

export default class SinglyLinkedList<T> {
	public size: number;
	head: ListNode<T> | null;

	constructor() {
			this.size = 0;
			this.head = null;
	}

	prepend(item: T): void {
			const newNode = new ListNode(item);
			newNode.next = this.head;
			this.head = newNode;
			this.size++;
	}

	insertAt(item: T, idx: number): void {
			if (idx < 0 || idx > this.size) {
					throw new Error('Invalid index');
			}
			if (idx === 0) {
					this.prepend(item);
					return;
			}
			const newNode = new ListNode(item);
			let current = this.head;
			for (let i = 0; i < idx - 1; i++) {
					current = current!.next;
			}
			newNode.next = current!.next;
			current!.next = newNode;
			this.size++;
	}

	append(item: T): void {
			const newNode = new ListNode(item);
			if (!this.head) {
					this.head = newNode;
			} else {
					let current = this.head;
					while (current.next) {
							current = current.next;
					}
					current.next = newNode;
			}
			this.size++;
	}

	remove(item: T): T | undefined {
			let current = this.head;
			let prev: ListNode<T> | null = null;
			while (current) {
					if (current.value === item) {
							if (!prev) {
									this.head = current.next;
							} else {
									prev.next = current.next;
							}
							this.size--;
							return current.value;
					}
					prev = current;
					current = current.next;
			}
			return undefined;
	}

	get(idx: number): T | undefined {
			if (idx < 0 || idx >= this.size) {
					return undefined;
			}
			let current = this.head;
			for (let i = 0; i < idx; i++) {
					current = current!.next;
			}
			return current!.value;
	}

	removeAt(idx: number): T | undefined {
			if (idx < 0 || idx >= this.size) {
					return undefined;
			}
			if (idx === 0) {
					const value = this.head!.value;
					this.head = this.head!.next;
					this.size--;
					return value;
			}
			let current = this.head;
			let prev: ListNode<T> | null = null;
			for (let i = 0; i < idx; i++) {
					prev = current;
					current = current!.next;
			}
			prev!.next = current!.next;
			this.size--;
			return current!.value;
	}
}

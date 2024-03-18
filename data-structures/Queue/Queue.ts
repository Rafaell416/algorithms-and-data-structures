class QueueNode<T> {
	value: T;
	next: QueueNode<T> | null;

	constructor(value: T) {
			this.value = value;
			this.next = null;
	}
}

export default class Queue<T> {
	private front: QueueNode<T> | null;
	private back: QueueNode<T> | null;
	public length: number;

	constructor() {
			this.front = null;
			this.back = null;
			this.length = 0;
	}

	enqueue(value: T): void {
			const newNode = new QueueNode(value);
			if (!this.front) {
					this.front = newNode;
					this.back = newNode;
			} else {
					this.back!.next = newNode;
					this.back = newNode;
			}
			this.length++;
	}

	dequeue(): T | undefined {
			if (!this.front) return undefined;
			const removedValue = this.front.value;
			this.front = this.front.next;
			if (!this.front) {
					this.back = null;
			}
			this.length--;
			return removedValue;
	}

	peek(): T | undefined {
			return this.front ? this.front.value : undefined;
	}

	isEmpty(): boolean {
			return this.length === 0;
	}

	getlength(): number {
			return this.length;
	}

	print(): void {
			let current = this.front;
			while (current) {
					console.log(current.value);
					current = current.next;
			}
	}
}

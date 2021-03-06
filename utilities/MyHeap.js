export class MyHeap {
	constructor(scoreFunction) {
		this.content = [null];
		this.scoreFunction = scoreFunction;
		this.length = 0;
	}

	getParent(idx) {
		return Math.floor(idx / 2);
	}
	getLeftChild(idx) {
		return idx * 2;
	}
	getRightChild(idx) {
		return idx * 2 + 1;
	}
	getScore(idx) {
		return this.scoreFunction(this.content[idx]);
	}
	updateLength() {
		this.length = this.content.length - 1;
	}

	swap(idxOne, idxTwo) {
		[this.content[idxOne], this.content[idxTwo]] = [
			this.content[idxTwo],
			this.content[idxOne],
		];
	}

	peek() {
		return this.content[1];
	}

	push(node) {
		this.content.push(node);
		this.heapifyUp(this.content.length - 1);
		this.updateLength();
	}

	pop() {
		let result = this.content[1]; // store priority element
		let end = this.content.pop(); // remove last node

		if (this.content.length > 1) {
			this.content[1] = end; // move last node to top
			this.heapifyDown(1);
		}
		this.updateLength();
		return result;
	}

	pushPop(node) {
		let result = node; // store new node

		// if the root is the priority element, store that for extraction, then move new element to the top and heapify down
		if (
			this.content.length > 1 &&
			this.getScore(1) < this.scoreFunction(node)
		) {
			result = this.content[1];
			this.content[1] = node;
			this.heapifyDown(1);
		}
		this.updateLength();
		// if the new node is the priority element, return it
		return result;
	}

	remove(node) {
		for (let i = 0; i < this.content.length; i++) {
			if (this.content[i] !== node) continue;

			let end = this.content.pop();

			if (i === length - 1) break;
			this.content[i] = end;
			this.heapifyUp(i);
			this.heapifyDown(i);
			this.updateLength();
			break;
		}
	}

	heapifyUp(idx) {
		if (this.content.length > 1) {
			while (
				idx > 1 &&
				this.getScore(idx) < this.getScore(this.getParent(idx))
			) {
				this.swap(idx, this.getParent(idx));
				idx = this.getParent(idx);
			}
		}
	}

	heapifyDown(idx) {
		while (this.content[this.getLeftChild(idx)]) {
			let smallerChildIdx = this.getLeftChild(idx);
			if (
				this.content[this.getRightChild(idx)] &&
				this.getScore(this.getRightChild(idx)) <
					this.getScore(this.getLeftChild(idx))
			) {
				smallerChildIdx = this.getRightChild(idx);
			}

			if (this.getScore(idx) < this.getScore(smallerChildIdx)) {
				break;
			} else {
				this.swap(idx, smallerChildIdx);
			}
			idx = smallerChildIdx;
		}
	}
}

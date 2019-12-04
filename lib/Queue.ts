import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private data: any[];

    constructor() {
        this.data = [];
    }

    public size(): number {
        return this.data.length;
    }

    public isEmpty(): boolean {
        return this.data.length === 0;
    }

    public enqueue(value: any) {
        this.data.push(value);
    }

    public peek(): any {
        return this.isEmpty() ? undefined : this.data[this.size() - 1];
    }
}
import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private data = [];

    public size(): number {
        return this.data.length;
    }
}
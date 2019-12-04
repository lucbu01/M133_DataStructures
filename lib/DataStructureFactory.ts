import { DataStructureType } from "./DataStructureType";
import { Queue } from "./Queue";
import { Stack } from "./Stack";
import { IDataScructure } from "./IDataStructure";

export class DataStructureFactory {
    public static create(type: DataStructureType) : IDataScructure {
        if(type === DataStructureType.FIFO) {
            return new Queue();
        } else {
            return new Stack();
        }
    }
}
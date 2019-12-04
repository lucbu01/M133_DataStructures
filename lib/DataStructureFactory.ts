import { DataStructureType } from "./DataStructureType";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory {
    public static create(type: DataStructureType) {
        if(type === DataStructureType.FIFO) {
            return new Queue();
        } else {
            return new Stack();
        }
    }
}
export interface IDataScructure {
    size(): number;

    isEmpty(): boolean;

    enqueue(value: any);

    peek(): any;

    poll(): any;
}
import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructureType } from "../lib/DataStructureType";
import { DataStructureFactory } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it('is empty on creaton', () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        });

        it('peek undefined on empty queue', () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            const result = testee.peek();
            expect(result).to.equal(undefined);
        });

        it('can enqueue and peek', () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            testee.enqueue("Hello");
            testee.enqueue("You");
            const result = testee.peek();
            expect(result).to.equal("Hello");
            expect(testee.size()).to.equal(2);
        });

        it('poll undefined on empty queue', () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            const result = testee.poll();
            expect(result).to.equal(undefined);
        });

        it('can enqueue and poll', () => {
            const testee = DataStructureFactory.create(DataStructureType.FIFO);
            testee.enqueue("Hello");
            testee.enqueue("You");
            const result = testee.poll();
            expect(result).to.equal("Hello");
            expect(testee.size()).to.equal(1);
        });
    });

    describe("Stack", () => {
        it("has size", () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it('is empty on creaton', () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        });

        it('peek undefined on empty queue', () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            const result = testee.peek();
            expect(result).to.equal(undefined);
        });

        it('can enqueue and peek', () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            testee.enqueue("Hello");
            testee.enqueue("You");
            const result = testee.peek();
            expect(result).to.equal("You");
            expect(testee.size()).to.equal(2);
        });

        it('poll undefined on empty queue', () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            const result = testee.poll();
            expect(result).to.equal(undefined);
        });

        it('can enqueue and poll', () => {
            const testee = DataStructureFactory.create(DataStructureType.LIFO);
            testee.enqueue("Hello");
            testee.enqueue("You");
            const result = testee.poll();
            expect(result).to.equal("You");
            expect(testee.size()).to.equal(1);
        });
    })

    describe("Factory", () => {
        it("can create Queue", () => {
           const structureType = DataStructureType.FIFO;
           const result = DataStructureFactory.create(structureType);
           expect(result).to.be.an.instanceOf(Queue);
       });

        it("can create Stack", () => {
            const structureType = DataStructureType.LIFO;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Stack);
        });
    });
})
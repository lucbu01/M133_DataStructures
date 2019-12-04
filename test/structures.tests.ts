import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it('is empty on creaton', () => {
            const testee = new Queue();
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        });

        it('peek undefined on empty queue', () => {
            const testee = new Queue();
            const result = testee.peek();
            expect(result).to.equal(undefined);
        });

        it('can enqueue and peek', () => {
            const testee = new Queue();
            testee.enqueue("Hello")
            const result = testee.peek();
            expect(result).to.equal("Hello");
        });
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})
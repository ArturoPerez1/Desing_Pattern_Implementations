import { Aggregate, AggregateArray } from "./aggregate";

export interface IIterator<T>{
    aggregate: Aggregate<T>
    next(): T;
    hasNext(): boolean;
}

export class IteratorArray<T> implements IIterator<T>{
    aggregate: AggregateArray<T>;
    position: number = 0;
    constructor(aggregate: AggregateArray<T>){
        this.aggregate = aggregate;
    }

    next(): T {
        const element : T = this.aggregate.items[this.position];
        this.position++;
        return element;
    }
    hasNext(): boolean {
        return this.position < this.aggregate.items.length; 
    }
}


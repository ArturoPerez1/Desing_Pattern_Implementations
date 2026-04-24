import { IteratorArray, IIterator } from "./iterator";

export interface Aggregate<T>{
    getIterator(): IIterator<T>;
}

export class AggregateArray<T> implements Aggregate<T>{
    items : T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }
    
    getIterator(): IIterator<T> {
        return new IteratorArray(this);
    }
}
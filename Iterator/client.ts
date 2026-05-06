import { AggregateArray } from "./aggregate.ts";

function main(): void{
    let aggregateArray = new AggregateArray<string>;
    aggregateArray.addItem("Item1");
    aggregateArray.addItem("Item2");
    aggregateArray.addItem("Item3");
    let iterator = aggregateArray.getIterator();

    console.log(iterator.next());
    console.log(iterator.hasNext());
    console.log(iterator.next());
}

main();
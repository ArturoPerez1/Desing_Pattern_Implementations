import { AggregateArray } from "./aggregate";

function main(){
    let aggregateArray = new AggregateArray<string>;
    aggregateArray.addItem("Arturo");
    aggregateArray.addItem("Arturo");
    aggregateArray.addItem("Arturo");
    let iterator = aggregateArray.getIterator();

    console.log(iterator.next());
    console.log(iterator.hasNext());
    console.log(iterator.next());
}
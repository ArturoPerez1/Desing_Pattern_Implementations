import Command from "./command.ts";
import Switchable from "./switchable.ts";

export default class TurnOnCommand implements Command{
    private receiver: Switchable;

    constructor(receiver: Switchable){
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.turnOn();
    }
}

import Command from "./command.ts";
import Switchable from "./switchable.ts";

export default class TurnOffCommand implements Command{
    private receiver: Switchable;

    constructor(receiver: Switchable){
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.turnOff();
    }
}

import Command from "./command.ts";

export default class RemoteControl {
    private command: Command;

    constructor(command: Command){
        this.command = command;
    }

    setCommand(command: Command): void{
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

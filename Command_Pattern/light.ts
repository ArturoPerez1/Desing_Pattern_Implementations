import Switchable from "./switchable.ts";

export default class Light implements Switchable {
    turnOn(): void {
        console.log("Luz Encendida");
    }

    turnOff(): void {
        console.log("Luz Apagada");
    }
}

import Observer from "./observer.ts";

export default class Subscriber implements Observer {
    name: string;
    lastName: string;

    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }

    update(videoTitle: string): void{
        console.log(`${this.name} ${this.lastName} recibio la notificacion del nuevo video: ${videoTitle}`);
    }
}

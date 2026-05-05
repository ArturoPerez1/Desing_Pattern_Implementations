import Observer from "./observer.ts";

export default interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(videoTitle: string): void;
}

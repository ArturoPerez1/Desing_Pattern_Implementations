import Observer from "./observer.ts";
import Subject from "./subject.ts";

export default class YoutubeChannel implements Subject {
    private subscribers: Observer[] = [];
    private latestVideoTitle: string | null = null;

    attach(observer: Observer): void{
        this.subscribers.push(observer);
    }

    detach(observer: Observer): void{
        this.subscribers = this.subscribers.filter(
            (currentObserver) => currentObserver !== observer,
        );
    }

    notify(videoTitle: string): void{
        for (const subscriber of this.subscribers) {
            subscriber.update(videoTitle);
        }
    }

    publishVideo(videoTitle: string): void {
        this.latestVideoTitle = videoTitle;
        this.notify(videoTitle);
    }

    getLatestVideoTitle(): string | null {
        return this.latestVideoTitle;
    }
}

import Subscriber from "./subscriber.ts";
import YoutubeChannel from "./youtubeChannel.ts";

let youtubeChannel = new YoutubeChannel();
let subscriber1 = new Subscriber("Arturo", "Perez");
let subscriber2 = new Subscriber("Maria", "Gonzalez");
let subscriber3 = new Subscriber("Luis", "Ramirez");

youtubeChannel.attach(subscriber1);
youtubeChannel.attach(subscriber2);
youtubeChannel.attach(subscriber3);

youtubeChannel.detach(subscriber2);

youtubeChannel.publishVideo("Video acerca de la IA");

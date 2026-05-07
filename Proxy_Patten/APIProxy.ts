import API from "./API.ts";
import APIUser from "./ApiUser.ts";



export default class APIProxy implements API {
    private readonly user: string;
    private api: API | null = null;

    constructor(user: string) {
        this.user = user;
    }

    getUser(): string {
        if (this.user !== "Arturo") {
            throw new Error("usuario no existe")
        }

        if (this.api === null) {
            this.api = new APIUser();
        }

        return this.api.getUser();
    }
}

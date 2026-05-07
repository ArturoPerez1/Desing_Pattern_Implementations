import API from "./API.ts";

export default class APIUser implements API{
    getUser(): string {
        return "Bienvenido Arturo"
    }
}

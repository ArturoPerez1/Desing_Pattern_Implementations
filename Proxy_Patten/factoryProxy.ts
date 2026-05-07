import API from "./Api.ts";
import APIProxy from "./APIProxy.ts";

export default class FactoryProxy {
    createAPIProxy(user: string): API {
        return new APIProxy(user);
    }
}

import FactoryProxy from "./factoryProxy.ts";

const factoryProxy = new FactoryProxy();
const userProxy = factoryProxy.createAPIProxy("Arturo");

console.log(userProxy.getUser());

import {
    GamerPeripheralFactory,
    OfficePeripheralFactory,
} from "./abstract_factory.ts";
import PeripheralSetup from "./client.ts";

const gamerSetup = new PeripheralSetup(new GamerPeripheralFactory());
const officeSetup = new PeripheralSetup(new OfficePeripheralFactory());

gamerSetup.usePeripherals();
officeSetup.usePeripherals();

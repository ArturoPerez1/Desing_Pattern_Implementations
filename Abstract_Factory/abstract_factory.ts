import {
    Keyboard, Mouse, Headset, GamerKeyboard,
    GamerMouse, GamerHeadset, OfficeKeyboard,
    OfficeMouse, OfficeHeadset
} from "./peripherals";

export interface PeripheralFactory {
    createKeyboard(): Keyboard;
    createMouse(): Mouse;
    createHeadset(): Headset;
}

export class GamerPeripheralFactory implements PeripheralFactory {
    createKeyboard(): Keyboard {
        return new GamerKeyboard();
    }

    createMouse(): Mouse {
        return new GamerMouse();
    }

    createHeadset(): Headset {
        return new GamerHeadset();
    }
}

export class OfficePeripheralFactory implements PeripheralFactory {
    createKeyboard(): Keyboard {
        return new OfficeKeyboard();
    }

    createMouse(): Mouse {
        return new OfficeMouse();
    }

    createHeadset(): Headset {
        return new OfficeHeadset();
    }
}
import {
    GamerHeadset,
    GamerKeyboard,
    GamerMouse,
    Headset,
    Keyboard,
    Mouse,
    OfficeHeadset,
    OfficeKeyboard,
    OfficeMouse,
} from "./peripherals.ts";

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

import type { PeripheralFactory } from "./abstract_factory.ts";
import type { Headset, Keyboard, Mouse } from "./peripherals.ts";

export default class PeripheralSetup {
    private keyboard: Keyboard;
    private mouse: Mouse;
    private headset: Headset;

    constructor(factory: PeripheralFactory) {
        this.keyboard = factory.createKeyboard();
        this.mouse = factory.createMouse();
        this.headset = factory.createHeadset();
    }

    usePeripherals(): void {
        this.keyboard.use();
        this.mouse.use();
        this.headset.use();
    }
}

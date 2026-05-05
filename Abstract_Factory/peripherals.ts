export interface Keyboard {
    use(): void;
}

export interface Mouse {
    use(): void;
}

export interface Headset {
    use(): void;
}

// Gamer family

export class GamerKeyboard implements Keyboard {
    use(): void {
        console.log("Using gamer RGB keyboard");
    }
}

export class GamerMouse implements Mouse {
    use(): void {
        console.log("Using high precision gamer mouse");
    }
}

export class GamerHeadset implements Headset {
    use(): void {
        console.log("Using gamer surround headset");
    }
}

// Office family

export class OfficeKeyboard implements Keyboard {
    use(): void {
        console.log("Using office keyboard");
    }
}

export class OfficeMouse implements Mouse {
    use(): void {
        console.log("Using office mouse");
    }
}

export class OfficeHeadset implements Headset {
    use(): void {
        console.log("Using office headset");
    }
}

export interface Keyboard {
    use(): void
}

export interface Mouse {
    use(): void
}

export interface Headset {
    use(): void
}

//Gamer Family

export class GamerKeyboard implements Keyboard {
    use(): void {
        console.log("Usando teclado gamer RGB")
    }
}

export class GamerMouse implements Mouse {
    use(): void {
        console.log("Usando mouse gamer de alta precisión")
    }
}

export class GamerHeadset implements Headset {
    use(): void {
        console.log("Usando headset gamer surround")
    }
}

// Office Family 

export class OfficeKeyboard implements Keyboard {
    use(): void {
        console.log("Usando teclado de oficina")
    }
}

export class OfficeMouse implements Mouse {
    use(): void {
        console.log("Usando mouse de oficina")
    }
}

export class OfficeHeadset implements Headset {
    use(): void {
        console.log("Usando headset de oficina")
    }
}

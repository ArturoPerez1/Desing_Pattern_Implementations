export interface Transport {
    deliver(): void;
}

export class Truck implements Transport {
    deliver(): void {
        console.log("Entrega por carretera");
    }
}

export class Ship implements Transport {
    deliver(): void {
        console.log("Entrega por mar");
    }
}

export abstract class Logistics {
    protected abstract createTransport(): Transport;

    planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    protected createTransport(): Transport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    protected createTransport(): Transport {
        return new Ship();
    }
}

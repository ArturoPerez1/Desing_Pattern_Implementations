interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver(): void {
        console.log("Entrega por carretera");
    }
}

class Ship implements Transport {
    deliver(): void {
        console.log("Entrega por mar");
    }
}


interface Logistic {
    createTransport(): Transport;
}

class RoadLogistic implements Logistic {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistic implements Logistic {
    createTransport(): Transport {
        return new Ship();
    }
}



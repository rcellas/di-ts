import { Engine, Vehicle } from "./vehicle";

// motor interface
// export interface IMotor {
//     start(): void;
//     stop(): void;
// }

export class MotorBike extends Vehicle {
    engineCapacity: number;

    constructor(engineCapacity: number, brand: string, color: string, wheels: number) {
        super(brand, color, wheels);
        this.engineCapacity = engineCapacity;
    }
    start() {
        const engine = new Engine();
        return engine.start();
    }
}

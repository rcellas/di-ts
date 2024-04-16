"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
// Definición de la clase Vehículo que depende de un motor
class Vehiculo {
    constructor(motor) {
        this.motor = motor;
    }
    iniciarVehiculo() {
        this.motor.start();
    }
    detenerVehiculo() {
        this.motor.stop();
    }
}
exports.Vehiculo = Vehiculo;

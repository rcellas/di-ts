"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const motor_1 = require("./motor");
const vehicle_1 = require("./vehicle");
// Creación de una instancia de un vehículo con un motor simple
const motorSimple = new motor_1.MotorSimple();
const vehiculo = new vehicle_1.Vehiculo(motorSimple);
// Utilización del vehículo
vehiculo.iniciarVehiculo(); // Salida esperada: El motor simple ha arrancado.
vehiculo.detenerVehiculo(); // Salida esperada: El motor simple se ha detenido.

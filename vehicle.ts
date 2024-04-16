// import { Motor } from "./motor";

export class Vehicle {
    brand:string;
    color:string;
    wheels:number;

    constructor(brand:string,color:string,wheels:number) {
        this.brand=brand;
        this.color=color;
        this.wheels=wheels;
    }
}

export class Engine{
    start(){
        return "Engine is started";
    }
}

import { IFlyStrategy } from "./IFlyStrategy";

export class NoFlyStrategy implements IFlyStrategy {
    fly() {
        console.log("Not flying today")
    }

}
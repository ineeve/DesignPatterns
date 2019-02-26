import { IQuackStrategy } from "./IQuackStrategy";

export class NoQuackStrategy implements IQuackStrategy {
    quack() {
        console.log("I can't quack");
    }

}
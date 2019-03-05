import Animal from "./Animal";

export default class Dog extends Animal {

    move(distance = 6): void {
        super.move(distance)
    }
}
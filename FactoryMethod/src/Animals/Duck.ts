import Animal from "./Animal";

export default class Duck extends Animal {
    move(distance = 1): void {
        super.move(distance)
    }
}
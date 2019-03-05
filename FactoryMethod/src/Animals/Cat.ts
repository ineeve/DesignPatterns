import Animal from "./Animal";

export default class Cat extends Animal {

    move(distance = 5): void {
        super.move(distance)
    }
}
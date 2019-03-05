import Animal from "../Animals/Animal";
import Dog from "../Animals/Dog";
import Cat from "../Animals/Cat";
import Duck from "../Animals/Duck";
import IAnimalFactory from "./IAnimalFactory";

export default class BalancedAnimalFactory implements IAnimalFactory {
    private prevAnimal: number = null;
    createAnimal(): Animal {
        if (this.prevAnimal == null || this.prevAnimal == 2) {
            this.prevAnimal = 0
            return new Dog()
        }
        if (this.prevAnimal == 0) {
            this.prevAnimal = 1
            return new Cat()
        }
        this.prevAnimal = 2
        return new Duck()
    }
}
import Animal from "../Animals/Animal";
import Dog from "../Animals/Dog";
import Cat from "../Animals/Cat";
import Duck from "../Animals/Duck";
import IAnimalFactory from "./IAnimalFactory";

export default class RandomAnimalFactory implements IAnimalFactory{
    createAnimal(): Animal {
        let rand = Math.random()
        if (rand < 1/3) return new Dog()
        if (rand < 2/3) return new Cat()
        return new Duck()
    }
}
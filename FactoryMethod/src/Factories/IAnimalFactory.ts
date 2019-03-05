import Animal from "../Animals/Animal";

export default interface IAnimalFactory {
    createAnimal(): Animal
}
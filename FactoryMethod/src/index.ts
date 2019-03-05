import BalancedAnimalFactory from "./Factories/BalancedAnimalFactory";
import IAnimalFactory from "./Factories/IAnimalFactory";
import RandomAnimalFactory from "./Factories/RandomAnimalFactory";
import Animal from "./Animals/Animal";

/**
 * Create two animal lists, using different factories.
 * In the end, print how much the animals from each list have moved.
 */

let balancedAnimalFactory: IAnimalFactory = new BalancedAnimalFactory()
let randomAnimalFactory: IAnimalFactory = new RandomAnimalFactory()
let balancedAnimals = []
let randomAnimals = []
for (let i = 0; i < 10; i++){
    balancedAnimals.push(balancedAnimalFactory.createAnimal())
    randomAnimals.push(randomAnimalFactory.createAnimal())
}
balancedAnimals.forEach(animal => animal.move())
randomAnimals.forEach(animal => animal.move())
const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
const mapper = (animal: Animal) => animal.position
console.log("balanced animals score", balancedAnimals.map(mapper).reduce(reducer))
console.log("random Animals score", randomAnimals.map(mapper).reduce(reducer))
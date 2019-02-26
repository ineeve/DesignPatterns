import { Duck } from "./Duck";
import {JetFlyStrategy} from './FlyStrategy/JetFlyStrategy';
import {SimpleQuackStrategy} from './QuackStrategy/SimpleQuackStrategy';

let cloudDuck = new Duck(new JetFlyStrategy(), new SimpleQuackStrategy());
cloudDuck.fly();
cloudDuck.quack();
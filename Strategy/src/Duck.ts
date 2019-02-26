import {IFlyStrategy} from './FlyStrategy/IFlyStrategy';
import {IQuackStrategy} from './QuackStrategy/IQuackStrategy';

export class Duck {

    private fs: IFlyStrategy;
    private qs: IQuackStrategy;

    constructor(fs: IFlyStrategy, qs: IQuackStrategy) {
        this.fs = fs;
        this.qs = qs;
    }

    fly() {
        this.fs.fly();
    }

    quack() {
        this.qs.quack();
    }
}
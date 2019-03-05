import MacOsFactory from "./Factories/MacOsFactory";
import WinFactory from "./Factories/WinFactory";
import LinuxFactory from "./Factories/LinuxFactory";
import IFactory from "./Factories/IFactory";

let factories: Array<IFactory> = [new WinFactory(), new LinuxFactory(), new MacOsFactory()]
factories.forEach(factory => {
    factory.createButton().display()
    factory.createDialog().display()
})
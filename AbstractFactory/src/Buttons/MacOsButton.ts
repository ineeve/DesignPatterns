import Button from "./Button";

export default class MacOsButton extends Button {
    display(): void {
        console.log(`I'm a MacOS Button!`)
    }

}
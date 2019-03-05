import Dialog from "./Dialog";

export default class WinDialog implements Dialog {
    display(): void {
        console.log(`I'm a windows 10 dialog`)
    }
}
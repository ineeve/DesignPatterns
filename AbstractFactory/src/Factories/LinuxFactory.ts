import IFactory from "./IFactory";
import Button from "../Buttons/Button"
import Dialog from "../Dialogs/Dialog"
import LinuxButton from "../Buttons/LinuxButton";
import LinuxDialog from "../Dialogs/LinuxDialog";


export default class LinuxFactory implements IFactory {
    createButton(): Button {
        return new LinuxButton()
    }
    createDialog(): Dialog {
        return new LinuxDialog()
    }
}
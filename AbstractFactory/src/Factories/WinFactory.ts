import IFactory from "./IFactory";
import Button from "../Buttons/Button"
import Dialog from "../Dialogs/Dialog"
import WinButton from "../Buttons/WinButton";
import WinDialog from "../Dialogs/WinDialog";

export default class WinFactory implements IFactory {
    createButton(): Button {
        return new WinButton()
    }
    createDialog(): Dialog {
        return new WinDialog()
    }
}
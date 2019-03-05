import IFactory from "./IFactory";
import Button from "../Buttons/Button"
import Dialog from "../Dialogs/Dialog"
import MacOsButton from "../Buttons/MacOsButton";
import MacOsDialog from "../Dialogs/MacOsDialog";

export default class MacOsFactory implements IFactory {
    createButton(): Button {
        return new MacOsButton()
    }
    createDialog(): Dialog {
        return new MacOsDialog()
    }
}
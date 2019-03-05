import Button from "../Buttons/Button";
import Dialog from "../Dialogs/Dialog";

export default interface IFactory {
    createButton(): Button;
    createDialog(): Dialog;
}
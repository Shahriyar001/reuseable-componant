import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  return createPortal(
    <div
      className={cn("fixed inset-0 bg-gray-500/70 invisible", {
        visible: isOpen,
      })}
    >
      <h1>This is modal</h1>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;

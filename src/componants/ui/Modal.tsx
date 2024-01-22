import { useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e) => {
    console.log(e.target);
    if (!containerRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}
    >
      <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500/70">
          <h1>This is modal</h1>
        </div>
      )}
    </>
  );
};

export default Modal;

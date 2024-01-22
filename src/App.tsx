import { FormEvent, useState } from "react";
import Button from "./componants/ui/Button";
import Container from "./componants/ui/Container";
import Modal from "./componants/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("click");
    if (true) {
      handleModalClose();
    }
  };

  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div className=" w-96 border border-red-400 p-10">
          <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>
            <Modal.Header>
              <h1>This is modal title</h1>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
              <input type="text" name="" id="" />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default App;

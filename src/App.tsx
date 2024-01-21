import Button from "./componants/ui/Button";
import Container from "./componants/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div className=" size-20">
          <Button outline={true} />
        </div>
      </div>
    </Container>
  );
}

export default App;

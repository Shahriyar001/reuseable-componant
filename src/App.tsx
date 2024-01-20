import Container from "./componants/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="btn btn-danger">This is header</h1>
        <h2 className="btn btn-primary">This is header</h2>
        <button className="px-3 py-2 bg-purple-400 rounded-md"> Click</button>
      </div>
    </Container>
  );
}

export default App;

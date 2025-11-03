import Heading from "./Componet/Heading";
import Button from "./Componet/Button";

function App() {
  return (
    <div>
      <h1>Redux ToolKit</h1>
      <Heading></Heading>
      <Button type={"Increment"}></Button>
      <Button type={"Decrement"}></Button>
      <Button type={"Reset"}></Button>
    </div>
  );
}

export default App;

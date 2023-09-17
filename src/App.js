import "./App.css";
import Nav from "./components/Nav/Nav";
import Pokedex from "./components/Pokedex/Pokedex";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Pokedex />
    </div>
  );
};

export default App;

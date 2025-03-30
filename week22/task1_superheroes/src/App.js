import "./App.css";
import Header from "./components/Header";
import SuperheroesCards from "./components/SuperheroesCards";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-body">
        <SuperheroesCards />
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import LanguageChoice from "./components/LanguageChoice";
import ActionButtons from "./components/ActionsButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LanguageChoice />
      <CardItem />
      <ActionButtons />
      <Footer />
    </div>
  );
}

export default App;

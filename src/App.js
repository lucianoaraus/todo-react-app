import "./App.scss";
import ListContainer from "./components/ListContainer";
import { ListProvider } from "./components/Context/ListContext";

function App() {
  return (
    <div className="app">
      <ListProvider>
        <ListContainer />
      </ListProvider>
    </div>
  );
}

export default App;

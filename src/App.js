import "./app.css";
import ListContainer from "./components/list-container/ListContainer";
import { ListProvider } from "./components/context/ListContext";

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

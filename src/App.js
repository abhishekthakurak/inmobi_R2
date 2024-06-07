import "./App.css";
import { PageJumper } from "./components/pageJumper";

function App() {
  return (
    <div className="App">
      <PageJumper totalRecords={100} currentPage={2} />
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header text-center my-5">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
      </div>
    </div>
  );
}

export default App;

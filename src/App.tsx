import { useEffect, useRef, useState } from "react";
import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [bold, setBold] = useState(false);
  const count = useRef(0);

  useEffect(() => {
    const a = inputValue.split(" ");
    count.current = a.length;
  }, [inputValue]);

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <div className="App_toolbox">
        <button
          className="App_toolbox_button App_toolbox_button--bold"
          onClick={() => setBold(!bold)}
        >
          B
        </button>
        <button
          className="App_toolbox_button App_toolbox_button--small"
          onClick={() => setBold(!bold)}
        >
          Small
        </button>
        <button
          className="App_toolbox_button App_toolbox_button--normal"
          onClick={() => setBold(!bold)}
        >
          Normal
        </button>
        <button
          className="App_toolbox_button App_toolbox_button--large"
          onClick={() => setBold(!bold)}
        >
          Large
        </button>
        <button
          className="App_toolbox_button App_toolbox_button--huge"
          onClick={() => setBold(!bold)}
        >
          Huge
        </button>
        <button className="App_toolbox_button" onClick={() => setBold(!bold)}>
          Clear
        </button>
      </div>
      <div className="App_editor">
        <textarea
          className={`App_editor-textarea ${
            bold ? "App_editor-textarea--bold" : ""
          }`}
          rows={12}
          spellCheck={false}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="App_editor_resultbox">
          <div>Words : {inputValue.length !== 0 ? count.current : 0}</div>
          <div>Characters : {inputValue.length}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

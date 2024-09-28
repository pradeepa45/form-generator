import * as React from "react";

import "./App.css";
import { FormContext } from "./contexts/FormContext";
import GeneratorGrid from "./components/pages/Home/layout";

function App() {
  const [formInputs, setForm] = React.useState([]);

  return (
    <div className="App">
      <FormContext.Provider value={{ formInputs, setForm }}>
        <GeneratorGrid />
      </FormContext.Provider>
    </div>
  );
}

export default App;

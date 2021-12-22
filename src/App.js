import React, { useState } from "react";

import Damier from "./components/Damier";
function App() {
  const [addRows, setAddRows] = useState(7);
  const [addCols, setAddCols] = useState(7);

  return (
    <div className="App">
      <Damier rows={addRows} cols={addCols} />
      <button value={addRows} onClick={(e) => setAddRows(addRows + 1)}>
        AddRows {addRows} +
      </button>
      <button value={addCols} onClick={(e) => setAddCols(addCols + 1)}>
        AddCols {addCols} +
      </button>
    </div>
  );
}

export default App;

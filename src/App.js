import React, { useState } from "react";
import TabsContext from "./context/Context";
import Display from "./components/Display";
import Tabs from "./components/Tabs";

import "./App.css";

function App() {
  const [state, setState] = useState({
    tabs: [
      "content is showing here",
      "content is showing here",
      "content is showing here",
      "content is showing here",
      "content is showing here"
    ],
    active: null
  });
  return (
    <div className="container">
      <TabsContext.Provider value={{ state, setState }}>
        <Tabs />
        <Display />
      </TabsContext.Provider>
    </div>
  );
}

export default App;
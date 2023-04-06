import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { InstanceProvider } from "./context";
import AppRoutes from "./navigation/routes";
import "./common.scss";

function App() {
  return (
    <Router>
      <InstanceProvider>
        <AppRoutes />
      </InstanceProvider>
    </Router>
  );
}

export default App;

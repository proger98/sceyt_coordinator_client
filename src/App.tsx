import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { InstanceProvider, AppProvider } from "./context";
import AppRoutes from "./navigation/routes";
import "./common.scss";

function App() {
  return (
    <AppProvider>
      <Router>
        <InstanceProvider>
          <AppRoutes />
        </InstanceProvider>
      </Router>
    </AppProvider>
  );
}

export default App;

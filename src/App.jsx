import { MantineProvider } from "@mantine/core";
import React from "react";
import "./app.css";
//
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <Outlet />
      </div>
    </MantineProvider>
  );
};

export default App;

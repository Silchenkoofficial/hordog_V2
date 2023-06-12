import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

import { theme } from "./theme";

import { ChakraProvider } from "@chakra-ui/react";

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

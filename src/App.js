// libraries
import React from "react";
import { Provider } from "react-redux";

// components
import InboxScreen from "./components/InboxScreen";

// lib
import store from "./lib/redux";

export default function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

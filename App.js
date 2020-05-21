/**
 * App.js
 */


/* Import modules */
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

/* Import components */
import Splashscreen from "./components/loading/Splashscreen";
import Home from "./components/app/Home";
import Today from "./components/app/Today";
import Forecast from "./components/app/Forecast";

/* Switch navigator (2nd navigation level) */
const MainTabs = createSwitchNavigator({
  Accueil: Home,
  "Aujourd'hui": Today,
  Prévision: Forecast,
}, {
  initialRouteName: "Accueil",
});

/* Switch navigator (1st navigation level) */
const App = createAppContainer(createSwitchNavigator({
  App: MainTabs,
  Loading: Splashscreen
}, {
  initialRouteName: "Loading"
}));

/* Export */
export default App;
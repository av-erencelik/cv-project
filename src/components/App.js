import React from "react";
import "../styles/App.css";
import Header from "./header";
import Main from "./main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;

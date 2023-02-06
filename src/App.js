import React from "react";
import Clock from "./Components/Clock";
import Form from "./Components/Form";

class App extends React.Component {
  render() {
    console.log("app component render");
    return <>
    
    <Clock locale="en-us" />
    <Form></Form>

    </>
  }
}

export default App;

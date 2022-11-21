import React from "react";
import { HelloWord } from "./Component-02";
import { Message } from "./Component-07";
export class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWord /> <Message />
      </div>
    );
  }
}

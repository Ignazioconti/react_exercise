import React from "react";
import { HelloWord } from "./Component-02";
import { Message } from "./Component-07";
import { Welcome } from "./Props-01";
export class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWord /> <Message />
        <p>
          <Welcome />
        </p>
      </div>
    );
  }
}

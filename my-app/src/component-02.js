import React from "react";
import { Message } from "./Component-07";

export class HelloWord extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello,Word</h1>
        <Message />
      </div>
    );
  }
}

import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.name && (
          <p>
            Welcome, <strong>{this.props.name}</strong>
          </p>
        )}
        {!this.props.name && <p>Welcome!!!!</p>}
        <Age age={25} />
      </div>
    );
  }
}

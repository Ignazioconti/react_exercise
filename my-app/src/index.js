// const hello = <h1>"Hello Word"</h1>;

// function hello(name) {
//   return <h1>'Hello, {name}</h1>;
// }

// // ---------------JSX-05-----------------//

// function sum(a, b) {
//   return <h2>${a + b}</h2>;
// }
import ReactDOM from "react-dom";
import { HelloWord } from "./component-02";
const helloWordElement = <HelloWord />;
const root = document.querySelector("#root");

ReactDOM.render(helloWordElement, root);

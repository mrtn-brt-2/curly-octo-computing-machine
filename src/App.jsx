import React from "react";
import ReactDOM from "react-dom";

const Title = props => (
  <h1 className="title">{props.text}</h1>
);

function Copy() {
  return <p>You can learn more about React at the documentation site <a href="https://react.dev/">react.dev</a>.</p>;
}

const App = () => {
  return(
    <div className="box">
      <Title text="Hello, World!" />
      <Copy />
    </div>
  );
}

ReactDOM.render(<App />,
document.getElementById("react-root"));

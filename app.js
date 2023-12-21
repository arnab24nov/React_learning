// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "headingText" },
//   "Namaste React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ReactDOM.render(heading, document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "It's a h1 tag."),
    React.createElement("h2", { id: "h2" }, "It's a h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "h3" }, "It's a h3 tag."),
    React.createElement("h4", { id: "h4" }, "It's a h4 tag."),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(parent);

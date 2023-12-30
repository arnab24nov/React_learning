import React from "react";

class NestedUser extends React.Component {
  constructor(props) {
    super(props);
    console.log("Nested Chiled Constructor");
  }

  componentDidMount() {
    console.log("Nested Child Component Did Mount");
  }

  render() {
    console.log("Nested Child Render.");
    return <h1>Email Id: {this.props.emailId}</h1>;
  }
}

export default NestedUser;

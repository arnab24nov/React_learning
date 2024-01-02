import React from "react";
import { useState } from "react";
import NestedUser from "./NestedUser";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url:
          "https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&h=180",
      },
      email: "",
    };
    console.log("First Child Constructor");
  }

  async componentDidMount() {
    console.log("First Child Component Did Mount");
    const response = await fetch("https://api.github.com/users/arnab24nov");
    const json = await response.json();

    this.setState({
      userInfo: json,
      email: this.props.email,
    });
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }
  componentWillUnmount() {
    console.log("Child Component Will Unmount");
  }
  render() {
    console.log("First Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    const email = this.state.email;
    // debugger;

    return (
      <div className="m-5 p-5 shadow-lg bg-slate-100 flex flex-col items-center">
        <img className="w-[200px] h-[200px] rounded-full" src={avatar_url} />
        <h3 className="text-[24px] text-slate-600 font-semibold">
          Name: {name}
        </h3>
        <h3 className="text-[20px] text-slate-600 font-semibold">
          Location: {location}
        </h3>
        <h3 className="text-[20px] text-slate-600 font-semibold">
          Email: {email}
        </h3>
      </div>
    );
  }
}

export default UserClass;

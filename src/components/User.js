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
    };
    console.log("First Child Constructor");
  }

  async componentDidMount() {
    console.log("First Child Component Did Mount");
    const response = await fetch("https://api.github.com/users/arnab24nov");
    const json = await response.json();
    console.log("json==>", json);
    this.setState({
      userInfo: json,
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
    // const { email } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

// export class User extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };

//     console.log("Second Child Constructor");
//   }

//   componentDidMount() {
//     console.log("Second Child Component Did Mount");
//   }
//   render() {
//     console.log("Second Child Render");
//     const { name, location } = this.props;
//     const { count } = this.state;

//     return (
//       <div className="user-card">
//         <h2>{name}</h2>
//         <h3>Location: {location}</h3>
//         <h3>Profile: React Developer</h3>
//         <h4>Counter: {count}</h4>
//         <button
//           onClick={() => {
//             this.setState({
//               count: ++this.state.count,
//             });
//           }}
//         >
//           Increase
//         </button>
//         <NestedUser emailId={"nov24ak@gmail.com"} />
//       </div>
//     );
//   }
// }

// export const User = ({ name, location }) => {
//   const [count1, setCount1] = useState(1);
//   const [count2, setCount2] = useState(2);

//   return (
//     <div className="user-card">
//       <h2>{name}</h2>
//       <h3>Location: Kolkata</h3>
//       <h3>Profile: React Developer</h3>
//       <h4>Counter-1: {count1}</h4>
//       <h4>Counter-2: {count2}</h4>
//       <button
//         onClick={() => {
//           setCount1((prevCount) => prevCount + 1);
//           setCount2((prevCount) => prevCount + 1);
//         }}
//       >
//         increase
//       </button>
//     </div>
//   );
// };

export default UserClass;

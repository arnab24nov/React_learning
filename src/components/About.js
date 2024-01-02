import UserClass from "./User";
import { User } from "./User";
import React from "react";

// const About = () => {
//   return (
//     <div className="about-page">
//       <h1>About</h1>
//       <p>This is the about page of the food delivery app.</p>
//       <UserClass name={"Arnab Khanrah"} location={"Bangalore"} />
//       {/* <User name={"Arnab K"} location={"Kolkata"} /> */}
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
    this.state = {};
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update.");
  }
  componentWillUnmount() {
    console.log("Parent Component Will Unmount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] font-bold underline text-slate-700">
          About Us
        </h1>
        <p className="text-[20px] text-slate-500">
          This is the about page of the food delivery app.
        </p>
        <UserClass email={"nov24ak@gmail.com"} />
      </div>
    );
  }
}

export default About;

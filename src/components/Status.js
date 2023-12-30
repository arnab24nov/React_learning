const Status = () => {
  return (
    <div className="offline-page" style={style}>
      <div style={divStyle}>😕</div>
      <h2>
        OOPS!! look like you are Offline. Please check your internet connection.
      </h2>
    </div>
  );
};

const style = {
  margin: "100px Auto",
  textAlign: "center",
};
const divStyle = {
  fontSize: "100px",
};

export default Status;

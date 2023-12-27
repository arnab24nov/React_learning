import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops! Something is wrong.</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <h3>Go Back.</h3>
    </div>
  );
};

export default Error;

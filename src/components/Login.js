const Login = () => {
  return (
    <dv className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </dv>
  );
};

export default Login;

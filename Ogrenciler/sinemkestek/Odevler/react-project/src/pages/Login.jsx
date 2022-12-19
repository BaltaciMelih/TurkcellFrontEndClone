const LogIn = () => {
  return (
    <div>
      <div className="form-container d-flex justify-content-center align-items-center">
        <form className="form">
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>E-mail</label>
          <input type="email" placeholder="@gmail.com" />
          <label>Number</label>
          <input type="tel" placeholder="5xx-xxx-xxxx" />
          <button id="form-button " className="my-2">
            Sign In
          </button>
          <button id="form-button " className="my-1">
            Sign Up
          </button>
          <button className="btn" id="form-close">
            X
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

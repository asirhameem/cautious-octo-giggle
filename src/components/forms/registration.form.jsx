export const RegistrationForm = () => {
  return (
    <>
      <div className={"block"}>
        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="Enter your name here" />
          {/*<p className="text-red-500 text-xs italic">Please provide a valid email.</p>*/}
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Enter your email here" />
          {/*<p className="text-red-500 text-xs italic">Please provide a valid email.</p>*/}
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" placeholder="Enter your password here" />
          {/*<p className="text-red-500 text-xs italic">Please provide a valid password.</p>*/}
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword" type="text" placeholder="Confirm you password" />
          {/*<p className="text-red-500 text-xs italic">Please provide a valid password.</p>*/}
        </div>

        <button className="w-full bg-black hover:bg-dark-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>

        <p className={"text-r"}>Already have an Account ?<p className={"text-r"}> Register</p></p>
      </div>
    </>
  );
};

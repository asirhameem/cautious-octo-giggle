import { useState } from "react";
import axiosInstance from "../../utils/request.helper";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

  const handleRegister = async (name, email, password, confirmPassword) => {
    if(password === confirmPassword) {
      const createUser = await axiosInstance.post("/users/register", {name: name,email: email, password: password, role: 'User'});

      if(createUser?.data?.success) {
        alert("User created, Please login");
        navigate("/login");
      }
    }
  }

  return (
    <>
      <div className={"block"}>
        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="name">
            Name
          </label>
          <input
            value={name} onChange={handleNameChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="Enter your name here" />
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="email">
            Email
          </label>
          <input
            value={email} onChange={handleEmailChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Enter your email here" />
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="password">
            Password
          </label>
          <input
            value={password} onChange={handlePasswordChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Enter your password here" />        
        </div>

        <div className="mb-6">
          <label className="text-r mb-2" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            value={confirmPassword} onChange={handleConfirmPasswordChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword" type="password" placeholder="Confirm you password" />
        </div>

        <button 
          onClick={() => handleRegister(name, email, password, confirmPassword)}
          className="w-full bg-black hover:bg-dark-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>

        <div className="flex items-center"><p className={"text-r"}>Already have an Account ?</p><p className={"ml-2 text-r"}> Login</p></div>
      </div>
    </>
  );
};

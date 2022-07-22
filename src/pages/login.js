import "../styles/login.css";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { userToken } from "../redux/action.js";
function Login() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Res, setRes] = useState();
  const Dispatch = useDispatch(userToken());
 

  Dispatch(userToken(localStorage.getItem("token")));
  async function handler(e) {
    await axios
      .post("http://localhost:4000/login", {
        password: Password,
        email: Email,
      })
      .then((res) => {
        console.log(res);
        setRes(res);
      });
  }
  const selector=useSelector((state)=>state.token);
  console.log(selector);
  console.log(Res);
  return (
    <div className="login">
      {Res === undefined ? (
        <div className="text"></div>
      ) : (
        (localStorage.setItem("role", Res.data.massage.role),
        localStorage.setItem("token", Res.data.massage.token),
        (<Redirect to="/" />))
      )}
      <div className="login-form">
        <label htmlFor="loginform">ایمیل</label>
        <input
          type="text"
          id="loginform"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="loginform">رمز</label>
        <input
          type="text"
          id="loginform"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={(e) => handler(e)}>
          ورود
        </button>
      </div>
    </div>
  );
}
export default Login;

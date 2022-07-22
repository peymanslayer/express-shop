import { useDispatch,useSelector } from "react-redux";
import "../styles/register.css";
import { render } from "react-dom";
import { Token } from "../redux/reducer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Register() {
  const [Name, setName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Mobile, setMobile] = useState();
  const [Errorto, setErrorto] = useState();
  const dispatch=useDispatch();
   function handler(e) {
    try {
      console.log(Name);
      if (
        Name === undefined ||
        LastName === undefined ||
        Email === undefined ||
        Password === undefined ||
        Mobile === undefined
      ) {
      } else {
        e.preventDefault();
        console.log(Email);
        
         axios("http://localhost:4000/signup",{
          method:"POST",
          data:({
           name:Name,
           last_name:LastName,
           password:Password,
           mobile:Mobile,
           email:Email
          }),
        })

          .then((res) => {
            console.log(res);
            setErrorto(res);
            dispatch(Token(res));
          });
      }
    } catch (err) {
      console.log(err);
    }
  }
  const selector=useSelector((state)=>state.CounterReducer.value)
  console.log(selector);
  console.log(Errorto);
  return (
    <>
      <div className="register">
        {Errorto === undefined ? (
          <div></div>
        ) : Errorto.massage === "user exist" ? (
          <div id="alert">dfgh</div>
          
        ) : (
          <div id="alert">موفق</div>,
          localStorage.setItem("role",""),
          <Redirect to="/"/>
          
        )}
        <img src="images/register.jpg" alt="" />
        <p className="logo"> فروشگاه اینترنتی</p>
        <div className="register-form">
          <label htmlFor="#input1"> نام </label>
          <input
            type="text"
            id="input1"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="#input1"> نام خانوادگی</label>
          <input
            type="text"
            id="#input1"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="#input1"> ایمیل</label>
          <input
            type="text"
            id="#input1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="#input1"> رمز</label>
          <input
            type="text"
            id="#input1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="#input1"> شماره موبایل</label>
          <input
            type="text"
            id="#input1"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button id="register-btn" onClick={(e) => handler(e)}>
          ورود
        </button>
      </div>
    </>
  );
}

export default Register;

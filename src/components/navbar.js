import "../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="desContainer">
          <ul className="navbar-ul">
            <input type="search" placeholder="جستجو" />
           <Link to="/login"><li> ورود </li></Link> 
           <Link className="register-navbar" to="/register"><li> ثبت نام</li></Link> 
            <li> تماس با ما</li>
           
          </ul>
          <div className="descreption"></div>
        </div>
        <div className="name">
              <li> فروشگاه</li>
            </div>
      </div>
    </>
  );
}
export default Navbar;

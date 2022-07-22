import "../../styles/bottomNav.css"
import { Link } from "react-router-dom";
function BottomNavbar() {
  return (
    <div className="bottom">
      <div className="bottomnav"></div>
      <ul className="bottomul">
        {localStorage.getItem("role") === "admin" ? (
          <Link to="/admin">
            <li className="admin">پنل ادمین</li>
          </Link>
        ) : localStorage.getItem("role") === "operator" ? (
          <Link>
            <li className="admin">پنل اپراتور</li>
          </Link>
        ) : (
          <li></li>
        )}
        <li className="location">موقعیت</li>
      </ul>
    </div>
  );
}
export default BottomNavbar;

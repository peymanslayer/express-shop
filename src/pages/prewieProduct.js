import { useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/prewie.css'
function Prewie() {
  const location = useLocation();
  const data = location.state.x;
  return (
    <div className="prewie">
      <div className="main-prewie">
        <img src={data.image} alt="" />
        <p>{data.description}</p>
        <p>{data.price}</p>
        <button className="prewie-btn">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}
export default Prewie;

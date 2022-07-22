import "../../styles/AdminLayout.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function AdminLayout(props){
    console.log(localStorage.getItem("token"));
    const [state, Setstate] = useState("");
  
    async function isAdmin() {
      await axios
        .post("http://localhost:4000/isadmin", {
          token: localStorage.getItem("token"),
        })
        .then((res) => {
          console.log(res.data);
          Setstate(res.data);
        });
    }
    useEffect(() => {
        isAdmin();
      }, []);
    return (
        <>
       <div className="Admin-layout">
        <section>
        {state==="is exist"||state===""?
            <div className="admin-panel">
                <div className="admin-dashboard">
                   <ul className="ul-dashboard">
                    <Link to={{ pathname: "/adminproduct", state: { x:"admin" } }}> <li> محصولات</li> </Link>
                       <hr />
                       <li>کاربران</li>
                    </ul> 
                </div>
                <div className="chart">
                  
                </div>
            </div>:state==="not exist"?<div>ادمین نیستید</div>:<div>ادمین نیستید</div> }
            <div className="counter">
            
            </div>
        </section>
        <section>{props.children}</section>
        </div>
        <section></section>
      
       </>
    )
}
export default AdminLayout;
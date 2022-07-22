import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main.page";
import { Mainlayout } from "./components/layouts/mainLayout";
import Prewie from "./pages/prewieProduct";
import Register from "./pages/register";
import Login from "./pages/login";
import Admin from "./pages/adminmain";
import Brandproduct from "./components/main/brandproduct";
import AdminProducts from "./components/adminComponent/adminproducts";
import Update  from "../src/pages/updateProduct";
import Create from "./pages/adminCreate";
function App() {
  return (
    <div className="App">
      <Router>
      <Mainlayout>       
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/prewie:id">
              <Prewie/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/admin" >
               <Admin/>
            </Route>          
          <Route exact path="/brand">
             <Brandproduct/>
          </Route>
          <Route exact path="/adminproduct">
           <AdminProducts/>
          </Route>
          <Route exact path="/updateproduct">
              <Update/>
          </Route>
          <Route exact path="/admincreate" >
             <Create/>
          </Route>
          </Switch>
      </Mainlayout>
      </Router>
    </div>
  );
}

export default App;

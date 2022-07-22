import "../../styles/brandproduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
function Brandproduct(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [State, setState] = useState([]);
  async function getdata() {
    const response = await axios.post("http://localhost:4000/products/get");
    const data = await response.data;
    setState(data.Products);
    console.log(data.Products);
  }
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = State.slice(offset, offset + PER_PAGE).map((x) => (
       
       <Link to={{ pathname: "/prewie:id", state: { x } }}>
       <div className="brand-product">
         {x.img?<img src={`data:image/png;base64,${x.img.data}`} alt="a"/>:<img src={x.image}/>}
         {/* <img src={x.image} alt="" /> */}
         <div>{x.description}</div>
         <div>{x.price}</div>
       </div>
      </Link>
  ));

  const pageCount = Math.ceil(State.length / PER_PAGE);
  useEffect(() => {
    getdata();
  }, []);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <>
      <div className="brand">
        {currentPageData}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          disableInitialCallback={true}
        />
      </div>
    </>
  );
}
export default Brandproduct;

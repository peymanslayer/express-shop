
import { Link } from "react-router-dom";
import "../../styles/adminProduct.css"
import ReactPaginate from "react-paginate";
import { useState,useEffect } from "react";
import axios from "axios";
function AdminProducts(){
    const [currentPage, setCurrentPage] = useState(0);
    const [State, setState] = useState([]);
    async function getdata() {
      const response = await axios.post("http://localhost:4000/products/get");
      const data = await response.data;
      setState(data.Products);
      console.log(data.Products);
    }
    function handlerdelete (x){
        axios.delete(`http://localhost:4000/admin/delete/product/${x}`,).then(res=>{
            console.log(res);
        })
    }
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = State.slice(offset, offset + PER_PAGE).map((x) => (

       <>
         <div className="admin-product-list">
           <img src={x.image} alt="" />
           <div className="description-product">{x.description}</div>
           <div className="price-product">{x.price}</div>
         <button onClick={()=>handlerdelete(x._id)} className="delete"> حذف</button> 
          <Link to={{pathname:"/updateproduct",state:{ID:x._id,f:x}}}> <button className="update">بروزرسانی</button> </Link> 
         </div>
        </>
   
    
    ));
  
    const pageCount = Math.ceil(State.length / PER_PAGE);
    useEffect(() => {
      getdata();
    }, []);
    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
    return(
        <>
        <div className="admin-product">
        {currentPageData}
        </div>
       <Link to="admincreate" ><button className="create-btn">ساخت محصول جدید</button></Link> 
        <div className="under">
        <ReactPaginate
          previousLabel={">"}
          nextLabel={"<"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageClassName={"paginate"}
        />
        </div>
        
           </> 
        
    )
}
export default AdminProducts;
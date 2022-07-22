import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import FormData from "form-data";
function Update(){
    const location=useLocation();
    const [store,Setstore]=useState([]);
const [file, setFile] = useState('');
const [fileName, setFileName] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0BGpPMbHDN3AB4IQyJmdis&ust=1651597636860000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDzte2mwfcCFQAAAAAdAAAAABAD");
const [addPrice,setaddPrice]=useState(location.state.f.price);
const [updateDes,setupdateDes]=useState(location.state.f.description);
const [SIle,setSIle]=useState();
    const saveFile = (e) => {
        setFile(e.target.files[0]);      
        setFileName(e.target.files[0].name);
      };
console.log(location);
  function upload (e){
    e.preventDefault();
      console.log(file);
        const formData = new FormData()
        formData.append('avatar', file)
     console.log(formData);
       axios.put(`http://localhost:4000/admin/update/product/${location.state.ID}`,formData,   {
        "Content-Type": "multipart/form-data",
    }).then(res=>{
          console.log(res);
          Setstore(res.data.find.update.img.data)
          // console.log( res.data.find.update.img.data.data.length);
          // for (let i = 0; i < res.data.find.update.img.data.data.length; i++) {
          //  let binaryString =+ String.fromCharCode(...new Uint8Array((res.data.find.update.img.data.data[i])))
          //   Setstore(binaryString)
          // }
          // const baseto64str=btoa(
          //   String.fromCharCode(...new Uint8Array((res.data.find.update.img.data.data)))
          // ) 
          // Setstore(baseto64str);
        // console.log(res.data.find.update.img.data.data);
       })
      //  console.log(store);
     }
    
    return(
        <div>
            <form action="" onSubmit={(e)=>upload(e)}>
        <input type="file" accept="image/*" onChange={(e)=>saveFile(e)} name="avatar" />
         
        <label htmlFor=""> توضیحات </label>
        <input type="text" onChange={(e)=>setupdateDes(e.target.value)} />
        
        <label htmlFor=""> قیمت </label>
        <input type="text" id="price" onChange={(e)=>setaddPrice(e.target.value)}/>
        <button type="submit">upload</button>
        </form>
        {/*{store.map((single)=>{
            const baseto64str=btoa(
            String.fromCharCode(...new Uint8Array((store.data.data)))
          ) 
         return <img src={`data:image/png,${baseto64str}`} alt="" />
        })} */}
        <img src={`data:image/png;base64,${store}`} alt="a"/>
        </div>
    )
}
export default Update;
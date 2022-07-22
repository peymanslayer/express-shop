import admincreate from "../styles/admincreate.css"
function Create(){
    return <div className="admin-create">
        <label htmlFor="">تصویر</label>
        <input type="file" />
        <label htmlFor="">توضیحات</label>
        <input type="text" />
        <label htmlFor="">قیمت</label>
        <input type="text" />

    </div>
}
export default Create;
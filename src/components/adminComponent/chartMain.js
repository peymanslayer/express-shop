import { Line } from "react-chartjs-2";
import { data } from "./chart.tsx";
import { options } from "./chart.tsx";
import axios from "axios";
function ChartMain(){
    async function getbydate() {
        const today = new Date();
        const yesterday = new Date(Date.now() - 86400000);
        const pa = new Date(Date.now() - 2 * 86400000);
        await axios
          .post("http://localhost:4000/order/getbydate", {
            newDate: today,
            yesterday: yesterday,
            other: pa,
          })
          .then((res) => {
            console.log(res);
          });
      }
    return(
        <div>
              <Line width="700px" height="400px"  options={options} data={data}/>
        </div>
    )
}
export default ChartMain;
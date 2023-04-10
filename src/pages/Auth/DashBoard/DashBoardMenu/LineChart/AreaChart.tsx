import React,{useState,useEffect} from "react";
import  Chart  from "react-apexcharts";
import { Toolbar } from "./Toolbar";
function Areachart() {
  const [getDatayear, setGetDatayear] = useState<string[]>([]);
  const [getDatacommit, setGetDatacommit] = useState<number[]>([]);

  useEffect(() => {
    const getCommitdata = async () => {
      const getYear = [];
      const getCommit = [];
      const reqData = await fetch(
        "http://localhost/reactgraphtutorial/Areachartgitgub"
      );
      const resData = await reqData.json();
      for (let i = 0; i < resData.length; i++) {
        getYear.push(resData[i].year);
        getCommit.push(resData[i].commits);
      }
      setGetDatayear(getYear);
      setGetDatacommit(getCommit);
    };
    getCommitdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mb-3 mt-3">
        <h2>Bảng thống kê theo ngày</h2>
        <Chart className="chart"
          type="area"
          width={1005}
          height={400}
          series={[
            {
              name: "Commits",
              data: [2600,3600,4150,4300,4150,3650,3200,3600,3300,3850,4221,3900,3680,4000,4400,4500,4300,3900,3700,3900],
            },
          ]}
          options={{
            title: {
              text: "Tháng 04/2023",
              style: { fontSize: "14px", color: "#A9A9B0", fontWeight: "400"  }, // chuyển đổi kiểu dữ liệu của fontSize từ number sang string
            },
            colors: ["#5185F7"],
            stroke: { width: 3, curve: "smooth" },
            xaxis: {
              title: {
                text: "",
                style: { fontSize: "20px", color: "#5185F7" }, // chuyển đổi kiểu dữ liệu của fontSize từ number sang string
              },
              categories: getDatayear,
            },
            yaxis: {
                min: 0,
                max: 6000,
                tickAmount: 6,
                labels: {
                  formatter: (value) => `${value}`,
                  style: { fontSize: "16px" },
                },
                title: {
                  text: "",
                  style: { fontSize: "20px" },
                },
                
            },
            dataLabels: {
                enabled: false
            },
            chart: {
                toolbar: {
                  show: false,
                },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Areachart;
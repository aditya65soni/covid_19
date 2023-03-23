import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const url = "https://data.covid19india.org/data.json";
    const res = await fetch(url);
    const mainData = await res.json();
    console.log(mainData.statewise);
    setData(mainData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="col-10 m-auto mt-5">
        <h3 style={{ margin: "-38px 0px 20px 0px" }}>
          <span
            style={{
              background: "burlywood",
              boxShadow: "4px 5px 5px grey",
              borderRadius: "3px",
            }}
          >
            INDIA COVID-19 DASHBOARD{" "}
          </span>
        </h3>
        <div className="table-responsive">
          <table className="table hovertable">
            <thead className="bg-dark " style={{ color: "white" }}>
              <tr>
                <th>state</th>
                <th>confirm</th>
                <th>recover</th>
                <th>death</th>
                <th>active</th>
                <th>update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                return (
                  <tr key={val}>
                    <td style={{ background: " beige" }}>{val.state}</td>
                    <td style={{ background: " yellow" }}>{val.confirmed}</td>
                    <td style={{ background: "green" }}>{val.recovered}</td>
                    <td style={{ background: "red" }}>{val.deaths}</td>
                    <td style={{ background: "orange" }}>{val.active}</td>
                    <td style={{ background: "beige" }}>
                      {val.lastupdatedtime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;

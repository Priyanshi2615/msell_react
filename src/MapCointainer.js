import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  faStar,
  faChartColumn,
  faChartLine,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

const MapContainer = () => {
  const data = [
    { name: "Category 1", salesValue: 1000, cases: 10 },
    { name: "Category 2", salesValue: 800, cases: 8 },
    { name: "Category 1", salesValue: 1000, cases: 10 },
    { name: "Category 1", salesValue: 1000, cases: 10 },
    { name: "Category 1", salesValue: 1000, cases: 10 },
    { name: "Category 1", salesValue: 1000, cases: 10 },
  ];

  const tableData = [
    {
      state: "New York",
      headQuarter: "HQ 1",
      city: "New York City",
      userName: "John Doe",
      mobile: "123-456-7890",
      salesValue: "$1000",
      quantity: "10",
      stars: 5,
    },
    {
      state: "California",
      headQuarter: "HQ 2",
      city: "Los Angeles",
      userName: "Jane Smith",
      mobile: "987-654-3210",
      salesValue: "$800",
      quantity: "8",
      stars: 4,
    },
  ];
  const dataMonthly = [
    { month: "Jan 2023", saleStats: 1000, year: 2023 },
    { month: "Feb 2023", saleStats: 1200, year: 2023 },
    { month: "Mar 2023", saleStats: 800, year: 2023 },
    { month: "Apr 2023", saleStats: 1500, year: 2023 },
    { month: "May 2023", saleStats: 900, year: 2023 },
  ];
  const piedata = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 200 },
    { name: "Category D", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Col sm={9} md={10} className="p-0">
      <div id="map-container" className="container">
        <div className="row">
          <div className="col-md-6 map-card">
            <div className="card" id="barchart">
              <div className="card-body">
                <div className="custom-row">
                  <div className="col-2">
                    <FontAwesomeIcon icon={faChartColumn} size="2x" />
                  </div>
                  <hr></hr>
                  <div className="col-6" >
                    {" "}
                    <h5 className="card-title" id="bartitle">Sale Stats</h5>
                  </div>
                </div>
                <BarChart id="barchartdata" width={400} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    label={{
                      value: "Sales Value",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{
                      value: "Cases",
                      angle: 90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="salesValue"
                    name="Sales Value"
                    fill=" #ff6666"
                    yAxisId="left"
                    style={{ width: "1px," }}
                  />
                  <Bar
                    dataKey="cases"
                    name="Cases"
                    fill=" #79a6d2"
                    yAxisId="right"
                  />
                </BarChart>
              </div>
            </div>
          </div>
          <div className="col-md-6 map-card" >
            <div className="card" id="tablecard">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="1x"
                    style={{ marginRight: "10px" }}
                  />
                  Performance
                </h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>Head Quarter</th>
                      <th>Town/City</th>
                      <th>User Name</th>
                      <th>Mobile</th>
                      <th>Sales Value</th>
                      <th>Quantity</th>
                      <th>Stars</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.state}</td>
                        <td>{row.headQuarter}</td>
                        <td>{row.city}</td>
                        <td>{row.userName}</td>
                        <td>{row.mobile}</td>
                        <td>{row.salesValue}</td>
                        <td>{row.quantity}</td>
                        <td>
                          {[...Array(row.stars)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              color="yellow"
                            />
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-12 map-card" style={{ paddingLeft: "38px" }}>
            <div className="card chart-card" id="chartcard">
              <div className="card-body">
                <div className="custom-row chart-header">
                  <div className="col-2 chart-icon">
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                  </div>
                  <div className="col-10 chart-title">
                    <h5 className="card-title" id="charttitle" >
                      Monthly Progress
                    </h5>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
                    data={dataMonthly}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      type="category"
                      label={{
                        value: "Month with Years",
                        position: "bottom",
                        dy: 20,
                      }}
                    />
                    <YAxis
                      dataKey="saleStats"
                      type="number"
                      label={{
                        value: "Sale Stats",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="saleStats"
                      name="Sale Stats"
                      stroke="#007BFF" 
                      strokeWidth={2} 
                      dot={{ stroke: "#007BFF", strokeWidth: 2, r: 4 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-md-5 map-card">
            <div
              className="card"
              id="piechart"
            >
              <div className="card-body">
                <div className="custom-row">
                <div className="col-2 chart-icon">
                    <FontAwesomeIcon icon={faChartPie} size="2x" />
                  </div>
                  <div className="col-4">
                    <h5 className="card-title" id="piecharttitle">Category Sale</h5>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={piedata}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                        labelLine={false}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend
                        align="right"
                        verticalAlign="middle"
                        layout="vertical"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 map-card">
            <div
              className="card"
              id="piechart2"
            >
              <div className="card-body">
                <div className="custom-row">
                <div className="col-2 chart-icon">
                    <FontAwesomeIcon icon={faChartPie} size="2x" />
                  </div>
                  <div className="col-4">
                    <h5 className="card-title" id="piecharttitle">Category Sale</h5>
                  </div>
                </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={piedata}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                        labelLine={false}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend
                        align="right"
                        verticalAlign="middle"
                        layout="vertical"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Col>
  );
};

export default MapContainer;

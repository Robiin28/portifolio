import React from "react";
import CountUp from "react-countup";
import './css/count.css';

const Count = () => {
  // Assuming data for number of clients, number of projects, and number of finished projects
  const data = [
    { id: 1, label: "Number of Clients", count: 5 },
    { id: 2, label: "Number of Projects", count: 10 },
    { id: 3, label: "Finished Projects", count: 15 },
  ];

  return (
    <>
      <div className=" counter">
        <div className="container grid3">
          {data.map((item) => (
            <div className="box boxn" key={item.id} data-aos="zoom-in">
              <i></i>
              <h1 className="countNumber">
                <CountUp start={0} end={item.count} duration={5} />
              </h1>
              <h3 className="countHead">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Count;

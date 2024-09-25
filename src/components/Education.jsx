import React from "react";
import "./Education.css"
import education from "./data/education.json";



const Education = () => {
  return (
    <>
      <div className="container ex" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                <h1> {data.name}</h1>
                </div>
                <div className="right">
                  <h2>{data.university}</h2>
                  <h3>{data.course}</h3>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate}-{data.endDate}{" "}
                    </span>{" "}

                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  
                  
                </div>
              </div>
             
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;

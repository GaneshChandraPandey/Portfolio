import React from "react";
import experience from "./data/certification.json";

const Certification = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>CERTIFICATES</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  
                  <button  className="btn btn-outline-warning my-3" onClick={()=>
                   window.open("https://drive.google.com/file/d/1-6Y_oOtMyR7iGdjBeNgbTgoBEjZZMtKa/view", "_blank")} >
                    view Certificate</button>
                </div>
              </div>
             
            </>
          );
        })}
      </div>
    </>
  );
};

export default Certification;

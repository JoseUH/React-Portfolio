import React from "react";
import "./Tecnologias.scss";

const Tecnologias = ({ tecnologias }) => {
  return (
    <div>
      <div className="tecnologiascard">
      
        {tecnologias.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
            <div className="caja">
              <p>{item.name}</p>
              <img src={item.src} alt={item.name} />
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tecnologias;
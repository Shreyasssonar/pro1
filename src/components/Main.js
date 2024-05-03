import React from 'react';
import mainImg from './Images/image.png';


function Main() {
  return (
    <div className="container">
      <div className="text-info">
        <h1>Build, Develop<br/> And Manufacture Plastic Products</h1>
        <p>Thriam helps you build, develop and manufacture plastic products easily with help of our mold manufacturing and moulding services.</p>
        <button>Call now to get Quotation under 30 Minutes</button>
      </div>
      <div className="image-container">
        <img src={mainImg} alt="Image" />
      </div>
    </div>
  );
}

export default Main;

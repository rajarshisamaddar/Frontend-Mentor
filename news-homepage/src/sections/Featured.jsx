import React from "react";
import style from "../assets/styles/Featured.module.scss";
import Image1 from "../assets/images/image-retro-pcs.jpg";
import Image2 from "../assets/images/image-top-laptops.jpg";
import Image3 from "../assets/images/image-gaming-growth.jpg";

function Featured() {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <img src={Image1} alt="image-retro-pcs"></img>
        <div>
          <h1>01</h1>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className={style.item}>
        <img src={Image2} alt="image-top-laptops"></img>
        <div>
          <h1>02</h1>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className={style.item}>
        <img src={Image3} alt="image-gaming-growth"></img>
        <div>
          <h1>03</h1>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";
import style from "../assets/styles/Hero.module.scss";
import ImageWeb from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
  return (
    <div className={style.main}>
      <div className={style.left}>
        <img src={ImageWeb} alt="hero-web-image" width="100%"></img>
        <div className={style.leftLower}>
          <div className={style.leftLowerLeft}>
            <h1>
              The Bright <br /> Future of
              <br /> Web 3.0?
            </h1>
          </div>
          <div className={style.leftLowerRight}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <h2>New</h2>
        <h4>Hydrogen VS Electric Cars</h4>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />
        <h4>The Downsides of AI Artistry</h4>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
        <h4>Is VC Funding Drying Up?</h4>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

export default Hero;

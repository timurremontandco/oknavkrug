import React from "react";
import { Carousel } from "antd";
import s1 from "./../assets/images/slider_1.jpg";
import s2 from "./../assets/images/slider_2.jpg";
import s4 from "./../assets/images/slider_4.jpeg";
import s5 from "./../assets/images/slider_5.jpg";
import s6 from "./../assets/images/slider_6.jpg";
import s7 from "./../assets/images/slider_7.jpeg";
import classes from "./../styles.module.scss";

export const Hero = () => {
  return (
    <div className={classes.slickListWrpper}>
      <Carousel
        arrows={false}
        focusOnSelect={false}
        adaptiveHeight
        autoplay
      >
        <div>
          <div
            style={{
              backgroundImage: `url(${s6})`,
            }}
            className={classes.carouseltem}
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${s7})`,
            }}
            className={classes.carouseltem}
          ></div>
        </div>

        <div>
          <div
            style={{ backgroundImage: `url(${s1})` }}
            className={classes.carouseltem}
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${s2})`,
            }}
            className={classes.carouseltem}
          ></div>
        </div>

        <div>
          <div
            style={{
              backgroundImage: `url(${s4})`,
            }}
            className={classes.carouseltem}
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${s5})`,
            }}
            className={classes.carouseltem}
          ></div>
        </div>
      </Carousel>
    </div>
  );
};

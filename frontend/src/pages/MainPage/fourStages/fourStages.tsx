import React, { useRef } from "react";
import { Carousel } from "antd";
import s from "./fourStages.module.scss";

export default function FourStages() {
  const carouselRef = useRef<any>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      if (event.deltaY > 0) {
        carouselRef.current.next();
      } else {
        carouselRef.current.prev();
      }
      event.preventDefault();
    }
  };

  return (
    <div
      onWheel={handleWheel}
      style={{ width: "100%", overflow: "hidden", marginBottom: "50px" }}
    >
      <Carousel
        ref={carouselRef}
        autoplay
        dots={false}
        slidesToShow={2.5}
        slidesToScroll={1}
        infinite={false}
      >
        <div className={s.blocks}>
          <h3 className={s.contentStyle}><span>01</span> </h3>
          <h4>Ознакомтесь с нашей страницей</h4>
        </div>
        <div className={s.blocks}>
          <h3 className={s.contentStyle}><span>02</span> </h3>
          <h4>Пройдите регистрацию</h4>
        </div>
        <div className={s.blocks}>
          <h3 className={s.contentStyle}><span>03</span></h3>
          <h4>Пройдите в личный кабинет</h4>
        </div>
        <div className={s.blocks}>
          <h3 className={s.contentStyle}><span>04</span></h3>
          <h4>Пользуйтесь с удовольствием</h4>
        </div>
      </Carousel>
    </div>
  );
}

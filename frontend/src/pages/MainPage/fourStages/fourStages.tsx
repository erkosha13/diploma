
import { Carousel } from "antd";
import s from "./fourStages.module.scss";

const FourStages: React.FC = () => {
  return (
    <div className={s.carouselContainer}>
      <Carousel
        autoplay
        dots={{
          className: s.carouselDots,
        }}
        slidesToShow={2}
        slidesToScroll={1}
        infinite={true}
      >
        <div className={s.blocks}>
          <div className={s.contentStyle}>
            <h1>
              <span>01</span>
            </h1>
            <h4>Ознакомтесь с нашей страницей</h4>
          </div>
        </div>
        <div className={s.blocks}>
          <div className={s.contentStyle}>
            <h1>
              <span>02</span>
            </h1>
            <h4>Пройдите регистрацию</h4>
          </div>
        </div>
        <div className={s.blocks}>
          <div className={s.contentStyle}>
            <h1>
              <span>03</span>
            </h1>
            <h4>Пройдите в личный кабинет</h4>
          </div>
        </div>
        <div className={s.blocks}>
          <div className={s.contentStyle}>
            <h1>
              <span>04</span>
            </h1>
            <h4>Пользуйтесь с удовольствием</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default FourStages;

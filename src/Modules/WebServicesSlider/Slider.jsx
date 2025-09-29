import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Slider1 from "../../assets/images/Slider1.png";
import Slider2 from "../../assets/images/Slider2.png";
import Slider3 from "../../assets/images/Slider3.png";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="w-full max-w-7xl mx-auto"
      >
        <SwiperSlide>
          <img
            src={Slider1}
            alt="Slider 1"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider2}
            alt="Slider 2"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider3}
            alt="Slider 3"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider1}
            alt="Slider 1"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider2}
            alt="Slider 2"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider3}
            alt="Slider 3"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider1}
            alt="Slider 1"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider2}
            alt="Slider 2"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider3}
            alt="Slider 3"
            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

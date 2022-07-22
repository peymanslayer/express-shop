import React from "react";
import BottomNavbar from "../components/main/bottomNavbar";
import Descreption from "../components/main/description";
import MainAbout from "../components/main/mainAbout";
import Ourbrand from "../components/main/ourbrand";
import Brandproduct from "../components/main/brandproduct";
//

import { Swiper, SwiperSlide } from "swiper/react";
// styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slider.css";
// import module
import { Autoplay, Pagination, Navigation } from "swiper";
function Main() {
  const image2 = "/images/sliderimage2.jpg";
const image3 = "/images/sliderimage3.jpg";
const image4 = "/images/sliderimage4.jpg";
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"/images/sliderimage1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
      <BottomNavbar></BottomNavbar>
      <Descreption />
      <MainAbout />
      <hr style={{ border: "2px solid red", marginTop: "20px" }} />
      <Ourbrand />
      <Brandproduct  />
    </>
  );
}
export default Main;

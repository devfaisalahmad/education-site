import React from "react";
//
import Slider from "react-slick";
import Title from "../../../components/Title/Title";
import { Home_data } from "../config/constands";
import SingleGallery from "../helpers/SingleGallery";

const Gallery = () => {
  const { Gallery_section_data } = Home_data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <section className="w-full py-6 md:pt-10 sm:pb-14 pb-12 bg-[#F1F8FF] gallery-sec">
      <div className="container">
        <Title
          heading={Gallery_section_data.heading}
          heading_2={Gallery_section_data.heading_2}
          description={Gallery_section_data.description}
        />

        {/* gallery imgses */}
        <div className="mt-8">
          <Slider {...settings}>
            {
              Gallery_section_data.data.map((item,i)=>(
                <SingleGallery key={i} {...item} />
              ))
            }
            
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

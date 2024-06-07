import React from "react";
import RecentTitle from "../helpers/RecentTitle";
import { Home_data } from "../config/constands";
import RecentSingle from "../helpers/RecentSingle";
import Slider from "react-slick";

const RecentNews = () => {
  const { Recent_news_data } = Home_data;
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
    <section className="w-full py-6 md:py-10 recentNews">
      <div className="container">
        {/* title */}
        <RecentTitle
          title_span={Recent_news_data.title_span}
          title_span_2={Recent_news_data.title_spna_2}
          title_span_3={Recent_news_data.title_span_3}
          description={Recent_news_data.description}
        />

        {/* content */}
        <div className="mt-10">
          <Slider {...settings}>
            {Recent_news_data.data.map((item, i) => (
            <RecentSingle key={i} {...item} />
          ))}
          </Slider>
          
        </div>
      </div>
    </section>
  );
};

export default RecentNews;

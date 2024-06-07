import React, { useEffect } from "react";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import Button from "../../../components/Button/Button";
import { icons } from "../../../shared/libs/icons";
import HeroBox from "../helpers/HeroBox";
//
import { Typewriter } from "react-simple-typewriter";
//
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // aos animation
  useEffect(() => {
    setInterval(() => {
      Aos.init({ duration: 500 });
    }, 1000);
  }, []);
  // slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {/* slider */}
        <div className="w-full bg-slider-bg bg-no-repeat bg-cover h-[300px] md:h-[635px] relative z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>
          <div className="container">
            <div className="md:pt-[8rem] pt-[6.2rem] flex flex-col">
              {/* content */}
              <div
                className="flex flex-col md:justify-start justify-center md:items-start items-center "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <p className="text-white text-lg md:text-xl font-semibold uppercase ">
                  the best techer for
                </p>

                <h2 className="text-whiteleading-80 tracking-wider font-semibold text-4xl sm:text-5xl md:text-7xl pt-2 uppercase font-roboto text-white">
                  <Typewriter
                    words={["education", "Sleep", "Code", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <Button className="mt-6">Bye now</Button>
              </div>
              {/* boxs */}
              <div className="mt-[5rem] md:flex gap-5 hidden">
                <HeroBox
                  title="BEST INDUSTRY LEADERS"
                  icons={icons.education}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="LEARN COURSES ONLINE"
                  icons={icons.speech}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="BOOK LIBRARY & STORE"
                  icons={icons.book}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="w-full bg-slider-bg2 bg-no-repeat bg-cover h-[300px] md:h-[635px] relative z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>
          <div className="container">
            <div className="md:pt-[8rem] pt-[6.2rem] flex flex-col">
              {/* content */}
              <div
                className="flex flex-col md:justify-start justify-center md:items-start items-center "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <p className="text-white text-lg md:text-xl font-semibold uppercase ">
                  the best techer for
                </p>

                <h2 className="text-whiteleading-80 tracking-wider font-semibold text-4xl sm:text-5xl md:text-7xl pt-2 uppercase font-roboto text-white">
                  <Typewriter
                    words={["education", "Sleep", "Code", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <Button className="mt-6">Bye now</Button>
              </div>
              {/* boxs */}
              <div className="mt-[5rem] md:flex gap-5 hidden">
                <HeroBox
                  title="BEST INDUSTRY LEADERS"
                  icons={icons.education}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="LEARN COURSES ONLINE"
                  icons={icons.speech}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="BOOK LIBRARY & STORE"
                  icons={icons.book}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="w-full bg-slider-bg3 bg-no-repeat bg-cover h-[300px] md:h-[635px] relative z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>
          <div className="container">
            <div className="md:pt-[8rem] pt-[6.2rem] flex flex-col">
              {/* content */}
              <div
                className="flex flex-col md:justify-start justify-center md:items-start items-center "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <p className="text-white text-lg md:text-xl font-semibold uppercase ">
                  the best techer for
                </p>

                <h2 className="text-whiteleading-80 tracking-wider font-semibold text-4xl sm:text-5xl md:text-7xl pt-2 uppercase font-roboto text-white">
                  <Typewriter
                    words={["education", "Sleep", "Code", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <Button className="mt-6">Bye now</Button>
              </div>
              {/* boxs */}
              <div className="mt-[5rem] md:flex gap-5 hidden">
                <HeroBox
                  title="BEST INDUSTRY LEADERS"
                  icons={icons.education}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="LEARN COURSES ONLINE"
                  icons={icons.speech}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="BOOK LIBRARY & STORE"
                  icons={icons.book}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="w-full bg-slider-bg4 bg-no-repeat bg-cover h-[300px] md:h-[635px] relative z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>
          <div className="container">
            <div className="md:pt-[8rem] pt-[6.2rem] flex flex-col">
              {/* content */}
              <div
                className="flex flex-col md:justify-start justify-center md:items-start items-center "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <p className="text-white text-lg md:text-xl font-semibold uppercase ">
                  the best techer for
                </p>

                <h2 className="text-whiteleading-80 tracking-wider font-semibold text-4xl sm:text-5xl md:text-7xl pt-2 uppercase font-roboto text-white">
                  <Typewriter
                    words={["education", "Sleep", "Code", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <Button className="mt-6">Bye now</Button>
              </div>
              {/* boxs */}
              <div className="mt-[5rem] md:flex gap-5 hidden">
                <HeroBox
                  title="BEST INDUSTRY LEADERS"
                  icons={icons.education}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="LEARN COURSES ONLINE"
                  icons={icons.speech}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="BOOK LIBRARY & STORE"
                  icons={icons.book}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;

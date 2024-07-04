import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialLogo from "../../assets/Testimional_logo.png";
import testimonial1 from "../../assets/testimonialIcon1.png";
import testimonial2 from "../../assets/testimonialIcon2.png";
import ReviewBottom from "../../assets/reviewIconBottom.png";
import Reviews from "../../assets/reviews.png";
import UpperComma from "../../assets/upperComma.png";
import LowerComma from "../../assets/lowerComma.png";
import loadicon from "../../icons/testimonial card right bottom.png";
import humanicon from "../../icons/testimonial description icon.png";
import testimonialTextTitle from "../../icons/testimonial text title.png";

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const testimonials = [
  {
    videoId: "dQw4w9WgXcQ",
    logo: "webflow",
    name: "Mike Warren",
    title: "Product Developer at Webflow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 5.0,
  },
  {
    videoId: "dQw4w9WgXcQ",
    logo: "company2",
    name: "Jane Doe",
    title: "Software Engineer at Company2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.5,
  },
  {
    videoId: "dQw4w9WgXcQ",
    logo: "company3",
    name: "John Smith",
    title: "Designer at Company3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.0,
  },
];
const testimonialReview = [
  {
    logo: testimonial1,
    name: "Mike Warren",
    title: "Product Developer at Webflow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 5.0,
    bottomLogo: ReviewBottom,
  },
  {
    logo: testimonial2,
    name: "Jane Doe",
    title: "Software Engineer at Company2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.5,
    bottomLogo: ReviewBottom,
  },
  {
    logo: testimonial1,
    name: "John Smith",
    title: "Designer at Company3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.0,
    bottomLogo: ReviewBottom,
  },
  {
    logo: testimonial2,
    name: "Jane Doe",
    title: "Software Engineer at Company2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.5,
    bottomLogo: ReviewBottom,
  },
  {
    logo: testimonial1,
    name: "John Smith",
    title: "Designer at Company3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    rating: 4.0,
    bottomLogo: ReviewBottom,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    // customPaging: (i) => <div className="custom-dot"><img src={""}></img></div>
  };

  return (
    <div className="testimonial-slider bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-center">
        <img
          src={TestimonialLogo}
          alt="Services"
          className="testimonial-logo mb-2 mt-5 w-28 max-w-xs md:max-w-sm lg:max-w-md object-contain"
        />
        <div className="relative">
          <img
            src={UpperComma}
            alt=""
            className="UpperinvertedComma"
          />
          {/* absolute -top-0 -left-5 w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 */}
          <h3 className="testimonial-heading text-2xl md:text-4xl lg:text-5xl font-semibold text-black text-center inline-block relative">
            Testimonials
            <img
              src={LowerComma}
              alt=""
              className="LowerinvertedComma"
            />
            {/* absolute -top-14 -right-0.5 transform translate-x-full translate-y-full w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 */}
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-slide flex flex-col md:flex-row items-center justify-center"

          >
            <div style={{ display: "flex" }} className="FlexCol">
              {/* Video Container */}
              <div className="video-container w-full md:w-3/5">
                <YouTubeEmbed embedId={testimonial.videoId} />
              </div>

              {/* Text Content Container */}
              <div className="testimonial-content w-full md:w-2/5 p-4">
                <div className="text-title">
                  <img src={testimonialTextTitle} />
                </div>
                <div className="text-head">
                  <div>
                    <img
                      src={humanicon}
                      alt=""
                      className="company-logo w-12 h-12 mb-4"
                    />
                  </div>
                  <div>
                    <p style={{ color: "#170F49" }} className="text-lg font-bold">{testimonial.name}</p>
                    <p style={{ color: "#6F6C90" }} className=" text-md">{testimonial.title}</p>
                  </div>
                </div>

                <p style={{ color: "#6F6C90" }} className="text text-sm md:text-base">{testimonial.text}</p>
                <div className="rating text-yellow-500 mt-2">
                  {"★".repeat(Math.floor(testimonial.rating))}
                  {"☆".repeat(5 - Math.floor(testimonial.rating))}
                  <span className="text-gray-700 ml-2">{testimonial.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex flex-col items-left justify-start">
        <img
          src={Reviews}
          alt="Services"
          className="testimonial-logo mb-2 mt-5 w-28 max-w-xs md:max-w-sm lg:max-w-md object-contain"
        />
        <h3 className="testimonial-heading text-md md:text-4xl lg:text-5xl font-semibold text-black text-left" style={{ fontSize: "32px" }}>
          Positive Feedback from Past Clients
        </h3>
      </div>
      <div className="horizontal-scroll-container overflow-x-auto whitespace-nowrap py-4">
        {testimonialReview.map((testimonial, index) => (
          <div
            key={index}
            className="inline-block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden m-4 h-full"
          >
            {/* <img
              src={LowerComma}
              alt=""
              className="absolute bottom-12 -right-8 w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
            /> */}
            <div className="p-4 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.logo}
                    className=" h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base mt-2 text-wrap">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <div className="text-yellow-500">
                  {"★".repeat(Math.floor(testimonial.rating))}
                  {"☆".repeat(5 - Math.floor(testimonial.rating))}
                </div>
                <span className="text-gray-700 ml-2">{testimonial.rating}</span>
                <img
                  src={testimonial.bottomLogo}
                  alt=""
                  className="ml-auto  sm:w-16 md:w-20 lg:w-24"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

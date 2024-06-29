import React from 'react';
import Slider from 'react-slick';
import './Testimional.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../assets/Testimional_logo.png"

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
    videoId: 'dQw4w9WgXcQ', 
    logo: 'webflow',
    name: 'Mike Warren',
    title: 'Product Developer at Webflow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
    rating: 5.0
  },
  {
    videoId: 'dQw4w9WgXcQ',
    logo: 'company2',
    name: 'Jane Doe',
    title: 'Software Engineer at Company2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
    rating: 4.5
  },
  {
    videoId: 'dQw4w9WgXcQ',
    logo: 'company3',
    name: 'John Smith',
    title: 'Designer at Company3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
    rating: 4.0
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="testimonial-slider bg-[]#FAFAFA">
      <div className="flex flex-col items-center justify-center">
      {<img src={Testimonials} alt="Services" className="mb-2 mt-5"/>}
      <h3 className="text-[42px] font-semibold text-black">Testimonials</h3>
    </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="video-container">
              <YouTubeEmbed embedId={testimonial.videoId} />
            </div>
            <div className="testimonial-content">
              <img src={`/path/to/${testimonial.logo}.png`} alt={testimonial.logo} className="company-logo" />
              <h3>{testimonial.name}</h3>
              <p className="title">{testimonial.title}</p>
              <p className="text">{testimonial.text}</p>
              <div className="rating">
                {'★'.repeat(Math.floor(testimonial.rating))}{'☆'.repeat(5 - Math.floor(testimonial.rating))}
                <span>{testimonial.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Windowsize from './Windowsize';
const slides = [
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control."},
    { name:"dharani",review:"Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control.Set up Node.js and Express.js for creating RESTful APIs to handle requests and responses.Use MongoDB for storing and managing tasks, user data, and authentication details.Implement JWT, and Bcrypt for secure access.Integrate middleware for user permissions and role-based access control."},
   
   
  ]
const Ratings = () => {
 const {width,height}= Windowsize()
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow:width>600? 2:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      }
  return (

    <div className='img11'><h1>Customer Testimonials</h1>
    <p>What Our Customers Have To Say</p>
   <div className="logo-slider1">
      <Slider {...settings}>
        {slides.map((logo, index) => (
          <div className="logo-image" key={index}>
            <p>{logo.review}</p>
            <h4><i className="fa-solid fa-user"></i>{logo.name}</h4>

          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Ratings
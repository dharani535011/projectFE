import React, { useContext } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Windowsize from './Windowsize';
import { OtherContext } from '../Contexts/OtherContext';

const Ratings = () => {
  const {reviews}=useContext(OtherContext)
  const [review,setreview]=reviews
 
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
     
      // console.log(review)

      const filters=review.filter((val)=>val.review.length>0)
  return (

    <div className='img11'><h1>Customer Testimonials</h1>
    <p>What Our Customers Have To Say</p>
   <div className="logo-slider1">
      <Slider {...settings}>
        {filters.map((logo, index) => (
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
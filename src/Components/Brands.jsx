import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "../assets/car1.svg"
import img2 from "../assets/car2.svg"
import img3 from "../assets/car3.svg"
import img4 from "../assets/car4.svg"
import img5 from "../assets/car5.svg"
import img6 from "../assets/car6.svg"
import img7 from "../assets/car7.svg"
import img8 from "../assets/car8.svg"
import img9 from "../assets/car9.svg"
import Windowsize from './Windowsize';
const slides = [
    { url: img, alt: 'Slide 1' },
    { url: img2, alt: 'Slide 2' },
    { url: img3, alt: 'Slide 3' },
    { url: img4, alt: 'Slide 4'  },
    { url: img5, alt: 'Slide 5'  },
    { url: img6, alt: 'Slide 6'  },
    { url: img7, alt: 'Slide 7'  },
    { url: img8, alt: 'Slide 8'  },
    { url: img9, alt: 'Slide 9'  },
  ]
const Brands = () => {
 const {width,height}= Windowsize()
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow:width>438? 3:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      }
  return (
    <div className='img1'><h1>Brands We Serve</h1>
   <div className="logo-slider">
      <Slider {...settings}>
        {slides.map((logo, index) => (
          <div key={index}>
            <img src={logo.url} alt={`Logo ${index + 1}`} className="logo-image" />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Brands
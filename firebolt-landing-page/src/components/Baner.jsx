import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

function Baner() {
  const [smallBaner, setSmallBaner] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const onWidthChange = (entries) => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          if (width < 700) {
            setSmallBaner(true);
          } else {
            setSmallBaner(false);
          }
        }
      };

      const resizeObserver = new ResizeObserver(onWidthChange);
      resizeObserver.observe(element);

      return () => {
        resizeObserver.unobserve(element);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  if (smallBaner) {
    return (
      <div className='slider-container overflow-x-clip' ref={elementRef}>
        <Slider {...settings} className="">
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_3_1_0505552c-4241-48da-937d-696400c238b4_800x.png?v=1721461672" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_3_1_0505552c-4241-48da-937d-696400c238b4_800x.png?v=1721461672" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_3_1_0505552c-4241-48da-937d-696400c238b4_800x.png?v=1721461672" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_3_1_0505552c-4241-48da-937d-696400c238b4_800x.png?v=1721461672" alt="" />
          </div>
          
        </Slider>
      </div>
    )
  } else {
    return (
      <div className='slider-container overflow-x-clip' ref={elementRef}>
        <Slider {...settings} className="">
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_77f607c8-2461-46f5-817c-2a7c53f0d8c8_1759x.jpg?v=1721975863" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_1_copy_3_1_7d7551b5-4b33-4d87-ae9a-593c9e3f9820_1759x.jpg?v=1721454329" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_1_e98cc5ff-76d9-4435-89e3-c20108cc18cc_1759x.png?v=1721461671" alt="" />
          </div>
          <div className="md:inline-block">
            <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_1_8dcad14c-b633-417f-b2cb-b589b282b055_1759x.png?v=1721454227" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Baner;

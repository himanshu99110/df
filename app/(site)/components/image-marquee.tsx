import React from 'react';

const ImageMarquee = () => {
  // Array of image paths to keep the JSX clean (DRY principle)
  const logos = [
    'https://digiwize-demo.pbminfotech.com/html-demo/images/development-agency/blog/blog-02-770x762.jpg',
    'https://www.digitalfueled.com/assets/images/about-us/d-cul%20(3).png',
    'https://digiwize-demo.pbminfotech.com/html-demo/images/about-us-1/img-02.jpg',
    'https://www.digitalfueled.com/assets/images/about-us/d-cul%20(5).png',
    'https://digiwize-demo.pbminfotech.com/html-demo/images/development-agency/blog/blog-03.jpg',
  ];

  return (
    <div className="relative w-full pb-10">
      {/* Swiper Section */}
      <div className="w-full">
        <div className="relative top-[-5%] flex overflow-hidden whitespace-nowrap before:absolute before:top-0 before:z-10 before:h-full before:w-62.5 before:content-[''] after:absolute after:top-0 after:z-10 after:h-full after:w-62.5 after:content-['']">
          
          {/* First Slide */}
          <div className="flex animate-custom-slide items-start">
            {logos.map((src, index) => (
              <div key={`slide1-${index}`} className="mx-[0.5vw] w-80">
                <img src={src} alt={`Logo ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>

          {/* Second Slide (Duplicate for seamless infinite scroll) */}
          <div className="flex animate-custom-slide items-start">
            {logos.map((src, index) => (
              <div key={`slide2-${index}`} className="mx-[0.5vw] w-80">
                <img src={src} alt={`Logo ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;
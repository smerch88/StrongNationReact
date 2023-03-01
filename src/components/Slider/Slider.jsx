import { Box } from '@mui/material';
// import Slider from 'react-slick';
import { AutoPlayContainer, StyledImg } from './Slider.styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

export const AutoPlay = ({ ...props }) => {
  SwiperCore.use([Autoplay]);

  const settings = {
    slidesPerView: 5,
    // slidesPerGroup: 8,
    spaceBetween: 15,
    // lazy: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 0,
      pauseOnMouseEnter: false,
    },
    // reverseDirection: props.reverseDirection,
    // allowTouchMove: false,
    noSwiping: false,
    speed: 10000,
    modules: [Autoplay],
    // reverseDirection: true,
    // breakpoint: {
    //   1366: {
    //     settings: {
    //       slidesPerView: 5,
    //       spaceBetween: 20,
    //     },
    //   },
    //   768: {
    //     settings: {
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //     },
    //   },
    //   480: {
    //     settings: {
    //       slidesPerView: 3,
    //       spaceBetween: 9,
    //     },
    //   },
    // },
    // 320: {
    //   settings: {
    //     slidesPerView: 3,
    //     spaceBetween: 9,
    //   },
    // },
  };

  return (
    <AutoPlayContainer>
      <Swiper {...settings}>
        {props.images.map(img => (
          <SwiperSlide key={img}>
            <Box>
              <StyledImg
                src={`https://strong-nation.online/api/v2/slider-photo/download/${img}`}
                alt="зображення демонструє роботу волонтерів"
                // loading="lazy"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </AutoPlayContainer>
  );
};

// import { useEffect, useRef } from 'react';
// import { Box } from '@mui/material';
// import { AutoPlayContainer, StyledImg } from './Slider.styled';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './Slider.css';
// import 'swiper/css';
// import { Autoplay } from 'swiper';

// export const AutoPlay = ({ images, reverseDirection }) => {
//   const settings = {
//     slidesPerView: 5,
//     slidesPerGroup: 8,
//     spaceBetween: 15,
//     lazy: true,
//     autoplay: {
//       disableOnInteraction: false,
//       delay: 1000,
//     },
//     reverseDirection: reverseDirection,
//     noSwiping: false,
//     speed: 10000,
//     module: [Autoplay],
//   };

//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiper = swiperRef?.current?.swiper;
//       setTimeout(() => {
//         swiper?.autoplay?.start();
//       }, 500);
//     }
//   }, [swiperRef]);

//   return (
//     <AutoPlayContainer>
//       <Swiper {...settings} ref={swiperRef}>
//         {images.map(img => (
//           <Box key={img}>
//             <SwiperSlide>
//               <StyledImg
//                 src={`https://strong-nation.online/api/v2/slider-photo/download/${img}`}
//                 alt="зображення демонструє роботу волонтерів"
//                 loading="lazy"
//               />
//             </SwiperSlide>
//           </Box>
//         ))}
//       </Swiper>
//     </AutoPlayContainer>
//   );
// };

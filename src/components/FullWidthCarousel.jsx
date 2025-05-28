// FullWidthCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import arteCelular from '../assets/arteCelular.png';
import arteLaptop from '../assets/arteLaptop.png';
import arteTablet from '../assets/arteTablet.png';
import artePantallaGrande from '../assets/artePantallaGrande.png';



const slides = [
  {
    id: 1,
    alt: 'Imagen 1',
    sources: {
      480: arteCelular,
      768: arteLaptop,
      1280: arteTablet,
      1920: artePantallaGrande,
    },
  },
  /*{
    id: 2,
    alt: 'Imagen 2',
    sources: {
      480: '/images/banner2-480.jpg',
      768: '/images/banner2-768.jpg',
      1280: '/images/banner2-1280.jpg',
      1920: '/images/banner2-1920.jpg',
    },
  },
  {
    id: 3,
    alt: 'Imagen 3',
    sources: {
      480: '/images/banner3-480.jpg',
      768: '/images/banner3-768.jpg',
      1280: '/images/banner3-1280.jpg',
      1920: '/images/banner3-1920.jpg',
    },
  },*/
];

export default function FullWidthCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[60vh] sm:h-[70vh] lg:h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.sources[1920]}
              srcSet={`
                ${slide.sources[480]} 480w,
                ${slide.sources[768]} 768w,
                ${slide.sources[1280]} 1280w,
                ${slide.sources[1920]} 1920w
              `}
              sizes="100vw"
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}







/*const images = [arteLaptop, arteTablet, artePantallaGrande,arteCelular]
export default function FullWidthCarousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
      className="w-full h-[60vh] sm:h-[80vh] lg:h-screen"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
   
  );
}*/

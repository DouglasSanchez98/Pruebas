import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay,Pagination,Scrollbar } from 'swiper/modules'

import imgMobile1 from '../assets/arteCelular.png'
import imgTablet1 from '../assets/arteTablet.png'
import imgLaptop1 from '../assets/arteLaptop.png'
import imgDesktop1 from '../assets/artePantallaGrande.png'

const slides = [
  {
    mobile: imgMobile1,
    tablet: imgTablet1,
    laptop: imgLaptop1,
    desktop: imgDesktop1,
    alt: 'Banner 1',
  },
  {
    mobile: imgMobile1,
    tablet: imgTablet1,
    laptop: imgLaptop1,
    desktop: imgDesktop1,
    alt: 'Banner 2',
  },
]

export default function ResponsiveCarousel() {
  return (
    <div name='quienessomos' className='flex items-center justify-center'>
    <Swiper
      modules={[Pagination, Autoplay,Scrollbar]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >
          <picture>
            <source media="(min-width: 1536px)" srcSet={slide.desktop} />
            <source media="(min-width: 1024px)" srcSet={slide.laptop} />
            <source media="(min-width: 640px)" srcSet={slide.tablet} />
            <img
              src={slide.mobile}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

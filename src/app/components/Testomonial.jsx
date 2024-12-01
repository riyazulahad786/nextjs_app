import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cards from "./Cards";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      title: "Review 1",
      description: "Great product, highly recommend!",
      image: "/testmonial/user.png",
      rating: ["/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png"],
    },
    {
      id: 2,
      title: "Review 2",
      description: "Excellent service and quality!",
      image: "/testmonial/user.png",
      rating: ["/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png"],
    },
    {
      id: 3,
      title: "Review 3",
      description: "Love it, will buy again!",
      image: "/testmonial/user.png",
      rating: ["/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png", "/testmonial/Vector.png"],
    },
  ];

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((review) => (
          <SwiperSlide key={review.id}>
            <Cards
              title={review.title}
              description={review.description}
              image={review.image}
              rating={review.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-container {
          width: 100%;
          max-width: 100%;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          z-index: 10;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          background-color: #000 !important;
        }

        .swiper-pagination-bullets {
          display: flex !important;
          justify-content: center !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}

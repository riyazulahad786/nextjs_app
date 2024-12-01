import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      title: "Review 1",
      description: "Great product, highly recommend!",
      image: "/testmonial/user.png",
      rating: [1, 1, 1, 1], // Assuming '1' means a filled star
    },
    {
      id: 2,
      title: "Review 2",
      description: "Excellent service and quality!",
      image: "/testmonial/user.png",
      rating: [1, 1, 1, 1],
    },
    {
      id: 3,
      title: "Review 3",
      description: "Love it, will buy again!",
      image: "/testmonial/user.png",
      rating: [1, 1, 1, 1],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((review) => (
          <SwiperSlide key={review.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={review.image}
                alt={review.title}
                className="w-16 h-16 mx-auto rounded-full mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-4">{review.description}</p>
              <div className="flex justify-center space-x-1">
                {review.rating.map((star, index) => (
                  <img
                    key={index}
                    src="/testmonial/Vector.png"
                    alt="Star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          z-index: 10;
        }

        .swiper-pagination {
          bottom: 15px !important;
        }

        .swiper-pagination-bullet {
          background-color: #000 !important;
        }

        .swiper-pagination-bullets {
          display: flex !important;
          justify-content: center !important;
        }

        @media (max-width: 768px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
}

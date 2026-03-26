"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface TestimonialType {
   id: number;
   name: string;
   location: string;
   flag: string;
   quote: string;
   rating: number;
}

const testimonials: TestimonialType[] = [
   // North America
   {
      id: 1,
      name: "Sarah M.",
      location: "New York, USA",
      flag: "🇺🇸",
      quote: "Guidera saved my trip to Japan. The cultural tips alone helped me avoid so many awkward moments. I felt like a local from day one.",
      rating: 5,
   },
   {
      id: 2,
      name: "Carlos R.",
      location: "Mexico City, Mexico",
      flag: "🇲🇽",
      quote: "I used to spend weeks planning trips. Guidera gave me a complete itinerary for Peru in under 60 seconds. Absolutely mind-blowing.",
      rating: 5,
   },
   {
      id: 3,
      name: "Emily T.",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      quote: "The expense tracking is a lifesaver. I always used to overspend on trips — now I see every dollar in real time across currencies.",
      rating: 5,
   },
   // Europe
   {
      id: 4,
      name: "James K.",
      location: "London, UK",
      flag: "🇬🇧",
      quote: "The safety alerts literally saved us from walking into a known scam area in Bangkok. Can't travel without this app now.",
      rating: 5,
   },
   {
      id: 5,
      name: "Maria L.",
      location: "Barcelona, Spain",
      flag: "🇪🇸",
      quote: "Finally, one app that does everything. No more 10 tabs open trying to plan a trip. Guidera handles it all beautifully.",
      rating: 5,
   },
   {
      id: 6,
      name: "Lukas W.",
      location: "Berlin, Germany",
      flag: "🇩🇪",
      quote: "I travel for work every other week. Guidera's smart packing list knows my profession, my allergies, and the weather. It's eerily good.",
      rating: 5,
   },
   // Asia
   {
      id: 7,
      name: "Priya S.",
      location: "Mumbai, India",
      flag: "🇮🇳",
      quote: "Traveling solo as a woman, the safety features give me peace of mind. The real-time danger zone alerts are a game changer.",
      rating: 5,
   },
   {
      id: 8,
      name: "Yuki T.",
      location: "Tokyo, Japan",
      flag: "🇯🇵",
      quote: "I pointed my camera at a menu in Italy and got instant translations. The AR feature is pure magic — my friends couldn't believe it.",
      rating: 5,
   },
   {
      id: 9,
      name: "Wei L.",
      location: "Singapore",
      flag: "🇸🇬",
      quote: "Planned a 3-week Southeast Asia trip in minutes. The day-by-day itinerary was better than what my travel agent used to build.",
      rating: 5,
   },
   // Africa
   {
      id: 10,
      name: "Amina D.",
      location: "Lagos, Nigeria",
      flag: "🇳🇬",
      quote: "As someone who loves exploring West Africa, having safety intelligence and cultural dos and don'ts in one app is incredible.",
      rating: 5,
   },
   {
      id: 11,
      name: "Thabo M.",
      location: "Cape Town, South Africa",
      flag: "🇿🇦",
      quote: "Guidera understood my travel style from the first trip. The AI recommendations keep getting better — it's like it knows me.",
      rating: 5,
   },
   {
      id: 12,
      name: "Fatima B.",
      location: "Nairobi, Kenya",
      flag: "🇰🇪",
      quote: "I shared my trip with 4 friends and we all had the same itinerary synced. No more group chat chaos. This is the future of travel.",
      rating: 5,
   },
   // South America
   {
      id: 13,
      name: "Sofia G.",
      location: "Buenos Aires, Argentina",
      flag: "🇦🇷",
      quote: "The offline mode saved me in Patagonia where there's zero signal. Every booking, map, and itinerary was right there on my phone.",
      rating: 5,
   },
   // Oceania
   {
      id: 14,
      name: "Liam O.",
      location: "Sydney, Australia",
      flag: "🇦🇺",
      quote: "I've tried every travel app out there. Guidera is the first one that actually replaces all of them. One app, zero compromises.",
      rating: 5,
   },
   {
      id: 15,
      name: "Aroha N.",
      location: "Auckland, New Zealand",
      flag: "🇳🇿",
      quote: "The cultural intelligence feature taught me things about Bali that 10 years of visiting never did. Respectful travel made easy.",
      rating: 5,
   },
];

const setting = {
   slidesPerView: 1,
   spaceBetween: 24,
   loop: true,
   autoplay: {
      delay: 3500,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
   },
};

const StarRating = ({ count }: { count: number }) => (
   <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
      {Array.from({ length: count }).map((_, i) => (
         <span key={i} style={{ color: '#F59E0B', fontSize: '18px' }}>★</span>
      ))}
   </div>
);

const CARD_HEIGHT = '320px';

const Feedback = () => {
   return (
      <>
      <style>{`
         .feedback-slider-four .swiper-pagination-bullet-active {
            background: #000 !important;
         }
         .feedback-slider-four .swiper-pagination-bullet {
            border: 1px solid #ccc;
         }
      `}</style>
      <div
         style={{ background: '#FEFBF3' }}
         className="position-relative z-1 pt-150 xl-pt-120 lg-pt-80 pb-150 xl-pb-120 lg-pb-80"
      >
         <div className="container">
            <div className="text-center mb-80 lg-mb-40">
               <div
                  className="text-uppercase fw-bold ls-1"
                  style={{ color: '#3FC39E', fontSize: '14px', letterSpacing: '3px', marginBottom: '16px' }}
               >
                  TESTIMONIALS
               </div>
               <h2 className="fw-bold" style={{ fontSize: '42px', marginBottom: '16px' }}>
                  Loved by travelers worldwide
               </h2>
               <p style={{ color: '#6B7280', fontSize: '18px' }}>
                  ⭐ 4.9 rating &nbsp;•&nbsp; 10,000+ on our waitlist &nbsp;•&nbsp; 127+ countries
               </p>
            </div>

            <Swiper {...setting} modules={[Autoplay, Pagination]} className="feedback-slider-four pb-60">
               {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                     <div
                        style={{
                           background: '#fff',
                           borderRadius: '16px',
                           padding: '32px 28px',
                           height: CARD_HEIGHT,
                           boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                           border: '1px solid rgba(0,0,0,0.12)',
                           display: 'flex',
                           flexDirection: 'column',
                        }}
                     >
                        <StarRating count={item.rating} />
                        <p
                           style={{
                              fontSize: '16px',
                              lineHeight: 1.65,
                              color: '#374151',
                              flex: 1,
                              marginBottom: '20px',
                              overflow: 'hidden',
                           }}
                        >
                           &quot;{item.quote}&quot;
                        </p>
                        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px', marginTop: 'auto' }}>
                           <div style={{ fontWeight: 700, fontSize: '15px', color: '#111827' }}>
                              {item.flag} {item.name}
                           </div>
                           <div style={{ color: '#9CA3AF', fontSize: '13px', marginTop: '4px' }}>
                              {item.location}
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
      </>
   )
}

export default Feedback

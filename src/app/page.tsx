import Home from "@/components/landing";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Guidera — Your Entire Trip, Before You Even Plan It",
  description: "Guidera is the all-in-one AI travel app that plans your entire trip — personalized itineraries, real-time safety alerts, cultural insights, smart packing lists, and a global traveler community. Join 10,000+ on the waitlist.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Guidera",
  applicationCategory: "TravelApplication",
  operatingSystem: "iOS, Android",
  description: "AI-powered all-in-one travel app — personalized itineraries, safety alerts, cultural insights, smart packing, and a global traveler community.",
  url: "https://guidera.one",
  author: {
    "@type": "Organization",
    name: "Guidera Inc.",
    url: "https://guidera.one",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "10847",
    bestRating: "5",
  },
};

const Page = () => {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </Wrapper>
  )
}

export default Page
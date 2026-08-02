import Home from "@/components/landing";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Guidera — AI-Assisted Travel Planning for iOS",
  description: "Guidera is an AI-assisted iOS travel app for trip planning, travel search and comparison, destination context, packing, expenses, and traveler community features.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Guidera",
  applicationCategory: "TravelApplication",
  operatingSystem: "iOS",
  description: "AI-assisted iOS travel planning, external-provider search and comparison, destination context, packing, expenses, and traveler community features.",
  url: "https://guidera.one",
  author: {
    "@type": "Organization",
    name: "Nitrosoft LLC",
    url: "https://guidera.one",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
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

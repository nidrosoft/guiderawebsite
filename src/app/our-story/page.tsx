import type { Metadata } from "next"
import LegalPageLayout from "@/components/common/LegalPageLayout"

export const metadata: Metadata = {
   title: "Our Story — Guidera",
   description: "From a $50 crowdfunding campaign to an AI-powered travel companion — the story of how Guidera was built by one person who refused to let a good idea die.",
}

const OurStoryPage = () => {
   return (
      <LegalPageLayout title="Our Story" lastUpdated="March 26, 2026">
         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>The Moment That Started Everything</h2>
         <p>
            In 2014, I was preparing for a trip to a country I&apos;d never visited before. I remember the anxiety — not the excited kind, but the kind that comes from not knowing. What&apos;s the weather going to be like when I land? Is the tap water safe? How do I get from the airport to the city? Which neighborhoods should I avoid at night? Do I need a visa? What plug adapter do I need? Is Uber even available there?
         </p>
         <p>
            I opened one app for flights. Another for hotels. A third for weather. Then Google for visa requirements. A travel blog for safety tips. A forum for local customs. A currency converter. A packing list app. Before I knew it, I had twelve tabs open and two days had gone by — and I still didn&apos;t feel like I had the full picture.
         </p>
         <p>
            That&apos;s when the idea hit me: why isn&apos;t there one place that just… knows?
         </p>
         <p>
            One app that could take a destination, your dates, and your travel style — and give you everything you need to know before you go. Not just bookings. Not just itineraries. A real, intelligent travel companion.
         </p>
         <p>
            That idea became Guidera.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>From Idea to Obsession</h2>
         <p>
            My name is Cyriac. I&apos;m an immigrant who moved to the United States to build a better life — and I&apos;ve been building things ever since I got here. I&apos;m a product and software engineer, currently working at Anthropic, the company behind Claude. By day, I architect software systems. By night (and weekends, and holidays, and lunch breaks), I&apos;ve been building Guidera.
         </p>
         <p>
            This project has been my obsession for the better part of seven years.
         </p>
         <p>
            It didn&apos;t start as an app. It started as a notebook full of ideas — sketches of what a perfect travel companion would look like. What information would it surface? How would it feel to use? What would make someone trust it enough to plan their entire trip around it?
         </p>
         <p>
            I filled notebooks. I mapped out user flows. I studied how travelers actually prepare for trips — the fragmented, frustrating process of piecing together information from a dozen different sources. I saw a problem that no one was solving well, and I couldn&apos;t let it go.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>The $50 That Almost Ended It All</h2>
         <p>
            In 2019, I was ready to bring Guidera to life. I knew I couldn&apos;t fund it alone, so I launched a crowdfunding campaign on Indiegogo, asking for $100,000 to hire developers and designers to build the first version.
         </p>
         <p>
            I got $50.
         </p>
         <p>
            Fifty dollars. Out of a hundred thousand. One single backer.
         </p>
         <p>
            I&apos;d be lying if I said it didn&apos;t break me a little. I questioned everything. Was the idea bad? Was I bad at communicating it? Did people just not care about this problem the way I did?
         </p>
         <p>
            For weeks, I sat with that disappointment. I thought about shelving the project entirely. Moving on. Focusing on my day job. Being realistic.
         </p>
         <p>
            But I couldn&apos;t stop thinking about the problem. Every time I traveled, every time a friend asked me for trip advice, every time I watched someone scramble through five apps trying to plan a weekend getaway — I knew Guidera needed to exist.
         </p>
         <p>
            So I made a decision: if no one was going to fund it, I would build it myself.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>Building It Solo</h2>
         <p>
            I&apos;m not a &quot;move fast and break things&quot; kind of builder. I&apos;m the kind who researches deeply, architects carefully, and builds to last. So that&apos;s what I did.
         </p>
         <p>
            I chose React Native as the foundation — not because it was trendy, but because it solved a real problem. I didn&apos;t want to build just for iPhone users. Android users make up the largest mobile audience in the world, and many of them are in regions where a travel companion app matters most. React Native let me build for both platforms from a single codebase, with a component ecosystem and community that was far ahead of alternatives at the time.
         </p>
         <p>
            I already had deep skills in React and database architecture from my career, so the transition was natural. I picked Supabase for the backend — real-time, PostgreSQL-powered, with edge functions I could deploy without managing servers. The architecture I needed was ambitious, but manageable for one person if I was strategic about it.
         </p>
         <p>
            And so I built. Function by function. Screen by screen. Feature by feature.
         </p>
         <p>
            I designed the database schema. I built the search engine. I integrated travel APIs. I designed the UI. I wrote the backend logic. I tested on real devices. I iterated. I rewrote things when they weren&apos;t good enough. I rewrote them again.
         </p>
         <p>
            For years, the project moved slowly — because I was one person with a full-time job. But it moved.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>Then AI Changed Everything</h2>
         <p>
            When large language models became mainstream, something clicked. The vision I&apos;d been carrying since 2014 — an app that actually <em>understands</em> travel and can give you intelligent, personalized guidance — was suddenly possible in a way it never was before.
         </p>
         <p>
            Before AI, the best I could do was display curated data. With AI, Guidera could <em>think</em>. It could take your destination, your dates, your travel style, your dietary restrictions, your budget, your companion type — and generate a complete trip intelligence package. Not just a list of hotels. A real understanding of what your trip would look like.
         </p>
         <p>
            AI gave me the conversational travel assistant I&apos;d always envisioned — one that could answer &quot;What should I know before visiting Dubai in Ramadan as a solo female traveler?&quot; with a response that covers dress code, restaurant hours, cultural expectations, safety considerations, and weather — all personalized, all in one place.
         </p>
         <p>
            I integrated Anthropic&apos;s Claude as the AI backbone. I engineered an entire prompt architecture — eleven specialized prompts organized across three layers, firing in parallel to generate trip intelligence in seconds. I built context-aware systems that feed the AI your full trip profile so every response is tailored, not generic.
         </p>
         <p>
            The years of architectural groundwork suddenly had an engine worthy of the chassis.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>What Guidera Is Today</h2>
         <p>
            Guidera is the travel companion I wished existed when I was planning that first trip in 2014. It brings together everything a traveler needs — before, during, and after a trip — into one intelligent platform.
         </p>
         <p>
            <strong>AI Trip Intelligence:</strong> Tell Guidera where you&apos;re going, and it generates a complete destination preview — weather, costs, safety, cultural guidance, visa requirements, local laws, what to pack, what to wear, dos and don&apos;ts, emergency contacts, and more. You choose what you want to see. No information overload. No digging through ten apps.
         </p>
         <p>
            <strong>Search and Compare:</strong> Flights, hotels, car rentals, and experiences from multiple providers — compared side by side. When you&apos;re ready to book, you go directly to the provider. No middleman markup.
         </p>
         <p>
            <strong>Community and Local Guides:</strong> Verified local guides who can show you the real version of their city. Vetted through identity verification, built on a trust system of reviews and vouches. Travelers connecting with travelers.
         </p>
         <p>
            <strong>Safety Intelligence:</strong> Real-time safety assessments, scam awareness, neighborhood guides, emergency contacts, and cultural etiquette — powered by AI and updated continuously.
         </p>
         <p>
            <strong>Expense Tracking:</strong> Scan receipts, track spending by category, and stay on budget — all within the same app where you planned your trip.
         </p>
         <p>
            <strong>Conversational AI Assistant:</strong> Ask anything. &quot;Is the tap water safe in Bali?&quot; &quot;What&apos;s the best way to get from Narita Airport to Shinjuku?&quot; &quot;Do I need a visa for Morocco?&quot; Guidera answers — with context, with nuance, with your specific trip in mind.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>This Is Product Number Six</h2>
         <p>
            Guidera isn&apos;t my first product. It&apos;s my sixth.
         </p>
         <p>
            As a solo entrepreneur — while holding down a full-time engineering career — I&apos;ve launched five products before this one. Each one taught me something. How to ship. How to prioritize. How to build systems that run without babysitting. How to design for real users, not imaginary ones.
         </p>
         <p>
            Guidera is the culmination of all of that experience, and it&apos;s the one I&apos;ve invested the most time, research, and heart into. Seven years of thinking about this problem. Thousands of hours of development. A database schema I could draw from memory. An AI architecture I designed prompt by prompt.
         </p>
         <p>
            It&apos;s not backed by a venture fund. It&apos;s not built by a team of fifty. It&apos;s built by one person who believed in the idea enough to keep going when the crowdfunding campaign returned fifty dollars. One person who decided that if the world wasn&apos;t going to hand him the resources, he&apos;d build it with the resources he had — his skills, his time, and an unwillingness to let a good idea die.
         </p>

         <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', marginTop: '32px', color: '#000' }}>What&apos;s Next</h2>
         <p>
            Guidera is live. It&apos;s on the App Store and Google Play. And it&apos;s just getting started.
         </p>
         <p>
            The roadmap is deep — group trip planning, voice assistant, flight compensation claims, deeper community features, more AI intelligence layers. Every week, the app gets smarter and more capable.
         </p>
         <p>
            But the mission hasn&apos;t changed since 2014: <strong>no traveler should ever feel unprepared.</strong>
         </p>
         <p>
            Whether you&apos;re visiting a new country for the first time or you&apos;re a seasoned traveler looking for a smarter way to plan — Guidera is the companion that gives you the full picture before you go, and stays with you the whole way.
         </p>
         <p>
            Welcome to Guidera. I&apos;m glad you&apos;re here.
         </p>
         <p style={{ marginTop: '24px' }}>
            — <strong>Cyriac</strong><br />
            <em>Founder, Guidera</em><br />
            <em>Product &amp; Software Engineer, Anthropic</em>
         </p>
      </LegalPageLayout>
   )
}

export default OurStoryPage

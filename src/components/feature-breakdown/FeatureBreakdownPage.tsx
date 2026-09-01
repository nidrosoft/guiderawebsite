"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Icon } from "iconsax-react";
import {
  Add,
  Airplane,
  ArrowLeft2,
  BagTick,
  CalendarEdit,
  Camera,
  Eye,
  Global,
  InfoCircle,
  MagicStar,
  Minus,
  Routing2,
  ShieldTick,
  TickCircle,
} from "iconsax-react";
import logo from "@/assets/images/logo/guideralogo.png";
import styles from "./featureBreakdown.module.scss";

type Access = "plus" | "free" | "included";

interface Feature {
  title: string;
  description: string;
  access: Access;
  note?: string;
}

interface FeatureGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: Icon;
  features: Feature[];
}

const groups: FeatureGroup[] = [
  {
    id: "plan",
    eyebrow: "PLAN",
    title: "Build the trip around you",
    description:
      "Turn a destination and a few preferences into a trip you can actually use.",
    icon: CalendarEdit,
    features: [
      {
        title: "Smart Trip Plan",
        description:
          "Generate a personalized plan that prepares every Trip Hub module in one guided flow.",
        access: "plus",
      },
      {
        title: "Day by day itinerary",
        description:
          "Organize activities, timing, places, and practical context into a clear daily schedule.",
        access: "included",
      },
      {
        title: "Weather aware packing",
        description:
          "Build a packing list around the destination, forecast, trip type, and your preferences.",
        access: "included",
      },
      {
        title: "Documents and entry prep",
        description:
          "Keep passport, visa, insurance, and destination document reminders in one checklist.",
        access: "included",
      },
      {
        title: "Culture and etiquette",
        description:
          "Review useful local customs, dress guidance, tipping context, and practical do's and don'ts.",
        access: "included",
      },
      {
        title: "Trips and booking imports",
        description:
          "Create a trip manually, scan a supported booking, or forward a confirmation email.",
        access: "free",
        note: "One active trip is included. Plus unlocks unlimited active trips.",
      },
    ],
  },
  {
    id: "understand",
    eyebrow: "UNDERSTAND",
    title: "See, translate, and ask",
    description:
      "Get help with unfamiliar places, signs, menus, and travel questions while you move.",
    icon: Eye,
    features: [
      {
        title: "AI Live Vision",
        description:
          "Use live camera context and voice to understand what is in front of you.",
        access: "plus",
      },
      {
        title: "Photo and document scans",
        description:
          "Scan supported menus, signs, and travel documents for AI assisted context and translation.",
        access: "plus",
      },
      {
        title: "Language Kit",
        description:
          "Prepare useful local phrases, pronunciation help, and text to speech for the trip.",
        access: "plus",
      },
      {
        title: "Guidera Travel Intelligence",
        description:
          "Ask a travel specialist that can use active destination context and verify changing travel information with purpose-built tools.",
        access: "free",
        note: "Five messages are included. Plus unlocks unlimited contextual travel conversations.",
      },
      {
        title: "Trip Snapshots",
        description:
          "Get a fast AI destination preview with practical planning and cost context.",
        access: "free",
        note: "Your first snapshot is included. Plus unlocks unlimited snapshots.",
      },
      {
        title: "Journey browsing",
        description:
          "Explore published medical, relocation, study, work, family, and other purpose-led Journey guides.",
        access: "free",
      },
      {
        title: "Custom Journey Briefings",
        description:
          "Build an AI briefing around your destination, travel stage, companion needs, and selected priorities.",
        access: "plus",
      },
      {
        title: "Journey Toolkit",
        description:
          "Use journey-specific cost tools, visa tracking, checklists, and practical planning utilities.",
        access: "plus",
      },
    ],
  },
  {
    id: "protect",
    eyebrow: "PROTECT",
    title: "Stay ready when plans change",
    description:
      "Keep critical timing, safety context, and flight disruption guidance close at hand.",
    icon: ShieldTick,
    features: [
      {
        title: "Flight Protection",
        description:
          "Monitor eligible flights and prepare verified compensation guidance when a disruption occurs.",
        access: "plus",
      },
      {
        title: "Departure Advisor",
        description:
          "Estimate when to leave using your flight, airport, route, and available travel conditions.",
        access: "plus",
      },
      {
        title: "Safety Intelligence",
        description:
          "Review destination-specific safety context, area guidance, common risks, sourced preparation, and proactive safety alerts.",
        access: "plus",
      },
      {
        title: "Emergency essentials",
        description:
          "Find emergency numbers and essential safety information without a subscription.",
        access: "free",
      },
      {
        title: "Nearby help and navigation",
        description:
          "Find hospitals, police stations, airports, and relevant embassy or consular resources nearby.",
        access: "free",
      },
    ],
  },
  {
    id: "organize",
    eyebrow: "ORGANIZE",
    title: "Keep the whole trip together",
    description:
      "Manage the details people usually scatter across messages, notes, and receipts.",
    icon: BagTick,
    features: [
      {
        title: "Expenses and budgets",
        description:
          "Track trip spending, budgets, categories, and helpful summaries in one place.",
        access: "plus",
      },
      {
        title: "AI receipt scanning",
        description:
          "Capture supported receipts, review extracted details, and add them to the trip budget.",
        access: "plus",
      },
      {
        title: "Traveler collaboration",
        description:
          "Invite travelers, coordinate one live trip, and keep shared details together.",
        access: "plus",
      },
      {
        title: "Travel Journal",
        description:
          "Save memories, photos, and notes in a journal that stays connected to the trip.",
        access: "plus",
      },
      {
        title: "Booking timeline",
        description:
          "Keep flights, stays, cars, and activities mapped to the trip they belong to.",
        access: "free",
      },
    ],
  },
  {
    id: "explore",
    eyebrow: "EXPLORE",
    title: "Discover more, without a paywall",
    description:
      "Browse inspiration and participate in the traveler community before upgrading.",
    icon: Global,
    features: [
      {
        title: "Destinations and local experiences",
        description:
          "Browse destination guides, practical details, creator content, events, and local experiences.",
        access: "free",
      },
      {
        title: "Travel deals",
        description:
          "Explore available flight, stay, cruise, and package offers from supported providers.",
        access: "free",
      },
      {
        title: "Search and compare",
        description:
          "Compare available travel options, then verify details and complete purchases with the provider.",
        access: "free",
      },
      {
        title: "Community participation",
        description:
          "Browse, post, comment, join groups, RSVP, connect, and message other travelers.",
        access: "free",
      },
      {
        title: "Become a local guide",
        description:
          "Apply to share local knowledge or services, subject to identity verification and program eligibility.",
        access: "free",
        note: "Applying is free. Guidera does not charge a subscription to join the guide program.",
      },
      {
        title: "Host events and Pulse activities",
        description:
          "Create community experiences and bring travelers together as a host.",
        access: "plus",
      },
    ],
  },
];

const quickFacts = [
  { icon: MagicStar, value: "Prepare", label: "Plans, packing, documents" },
  { icon: Camera, value: "Explore", label: "Live guidance and local tools" },
  { icon: Airplane, value: "Protect", label: "Flights, expenses, and claims" },
];

const accessLabel: Record<Access, string> = {
  plus: "Plus",
  free: "Free",
  included: "Smart Plan",
};

function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <li className={styles.featureRow}>
      <span
        className={`${styles.check} ${styles[feature.access]}`}
        aria-hidden="true"
      >
        <TickCircle size={19} color="currentColor" variant="Linear" />
      </span>
      <div className={styles.featureCopy}>
        <div className={styles.featureTitleLine}>
          <h3>{feature.title}</h3>
          <span className={`${styles.accessBadge} ${styles[feature.access]}`}>
            {accessLabel[feature.access]}
          </span>
        </div>
        <p>{feature.description}</p>
        {feature.note && <small>{feature.note}</small>}
      </div>
    </li>
  );
}

export default function FeatureBreakdownPage() {
  const [openGroups, setOpenGroups] = useState(() => new Set([groups[0].id]));

  const toggleGroup = (id: string) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.assign("/");
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Guidera home">
          <Image src={logo} alt="Guidera" priority />
        </Link>
        <button
          type="button"
          className={styles.closeButton}
          onClick={goBack}
          aria-label="Go back"
        >
          <ArrowLeft2 size={20} color="currentColor" variant="Linear" />
          <span>Back</span>
        </button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <MagicStar size={15} color="currentColor" /> GUIDERA PLUS
          </span>
          <h1>
            Everything you need to travel <em>ready.</em>
          </h1>
          <p>
            Guidera brings planning, live AI help, safety preparation, trip
            organization, and flight protection into one travel companion.
          </p>

          <div className={styles.quickFacts}>
            {quickFacts.map(({ icon: Icon, value, label }) => (
              <div className={styles.fact} key={label}>
                <span className={styles.factIcon}>
                  <Icon size={18} color="currentColor" />
                </span>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <span>FULL FEATURE BREAKDOWN</span>
          <h2>Free where it should be. Powerful when you need more.</h2>
          <p>
            Start exploring and connecting for free. Guidera Plus unlocks the
            tools that build, monitor, scan, and coordinate the trip for you.
          </p>
        </div>

        <nav className={styles.categoryNav} aria-label="Feature categories">
          {groups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.eyebrow}
            </a>
          ))}
        </nav>

        <div className={styles.groups}>
          {groups.map((group, index) => {
            const Icon = group.icon;
            const isOpen = openGroups.has(group.id);
            const panelId = `${group.id}-features`;
            return (
              <article className={styles.group} id={group.id} key={group.id}>
                <button
                  className={styles.groupHeader}
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className={styles.groupNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.groupIcon}>
                    <Icon size={24} color="currentColor" variant="Linear" />
                  </span>
                  <span className={styles.groupHeading}>
                    <small>{group.eyebrow}</small>
                    <strong>{group.title}</strong>
                    <span>{group.description}</span>
                  </span>
                  <span className={styles.toggleIcon} aria-hidden="true">
                    {isOpen ? (
                      <Minus size={20} color="currentColor" />
                    ) : (
                      <Add size={20} color="currentColor" />
                    )}
                  </span>
                </button>
                <div
                  className={`${styles.groupBody} ${isOpen ? styles.open : ""}`}
                  id={panelId}
                >
                  <ul>
                    {group.features.map((feature) => (
                      <FeatureRow feature={feature} key={feature.title} />
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <aside className={styles.accuracyNote}>
          <InfoCircle size={21} color="currentColor" variant="Linear" />
          <p>
            AI generated guidance can make mistakes. Verify critical visa,
            health, safety, financial, and booking details with official sources
            and providers.
          </p>
        </aside>

        <section className={styles.finalCta}>
          <div className={styles.ctaIcon}>
            <Routing2 size={31} color="currentColor" />
          </div>
          <span>ONE COMPANION, THE WHOLE TRIP</span>
          <h2>Plan less. Experience more.</h2>
          <p>Return to Guidera to choose the plan that fits your next trip.</p>
          <button type="button" onClick={goBack}>
            Back to Guidera
          </button>
        </section>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          Guidera.
        </Link>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </div>
        <p>© 2026 Nitrosoft LLC</p>
      </footer>
    </main>
  );
}

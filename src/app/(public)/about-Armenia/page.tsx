import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Building2,
  CheckCircle,
  Clock3,
  DollarSign,
  Flag,
  Globe,
  Heart,
  Landmark,
  Languages,
  MapPinned,
  Mountain,
  Music,
  Plane,
  Stethoscope,
  Sparkles,
  Sun,
  Tent,
  Users,
  Utensils,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getAboutCountryContent } from "@/lib/public-page-content";
import { replaceCurrencySymbol } from "@/lib/currency";
export const metadata: Promise<Metadata> = buildMetadata({
  title: "About Armenia - Culture, Lifestyle and Education | mbbsinarmenia.com",
  description:
    "Discover Armenia - a safe, culture-rich, and globally connected destination for MBBS aspirants with quality education and strong clinical exposure.",
  entitySeo: {
    metaKeyword:
      "about Armenia, Armenia culture, life in Armenia for students, mbbs Armenia environment, study MBBS in Armenia",
  },
  path: "/about-Armenia",
  pageKey: "about-Armenia",
});
const themeStyles = {
  red: {
    softPanel: "border-gray-200 bg-white/80",
    iconWrap: "bg-[#EAF1FB] text-red-600",
    iconHover: "group-hover:bg-red-600 group-hover:text-gray-900",
    titleHover: "group-hover:text-[#285BB5]",
    wash: " via-white/0 ",
    ringHover: "hover:border-gray-200 hover:",
    pill: "bg-[#EAF1FB] text-[#285BB5]",
  },
  blue: {
    softPanel: "border-gray-200 bg-white/80",
    iconWrap: "bg-[#EAF1FB] text-red-600",
    iconHover: "group-hover:bg-red-600 group-hover:text-gray-900",
    titleHover: "group-hover:text-[#285BB5]",
    wash: " via-white/0 ",
    ringHover: "hover:border-gray-200 hover:",
    pill: "bg-[#EAF1FB] text-[#285BB5]",
  },
  green: {
    softPanel: "border-green-100 bg-green-50/80",
    iconWrap: "bg-green-100 text-green-600",
    iconHover: "group-hover:bg-green-600 group-hover:text-gray-900",
    titleHover: "group-hover:text-green-700",
    wash: " via-white/0 ",
    ringHover: "hover:border-green-200 hover:",
    pill: "bg-green-100 text-green-700",
  },
  amber: {
    softPanel: "border-gray-200 bg-[#EAF1FB]0/10",
    iconWrap: "bg-red-400 text-red-600",
    iconHover: "group-hover:bg-red-400 group-hover:text-gray-900",
    titleHover: "group-hover:text-[#285BB5]",
    wash: " via-white/0 ",
    ringHover: "hover:border-gray-200 hover:",
    pill: "bg-red-400 text-red-600",
  },
  purple: {
    softPanel: "border-purple-100 bg-purple-50/80",
    iconWrap: "bg-purple-100 text-purple-600",
    iconHover: "group-hover:bg-purple-600 group-hover:text-gray-900",
    titleHover: "group-hover:text-purple-700",
    wash: " via-white/0 ",
    ringHover: "hover:border-purple-200 hover:",
    pill: "bg-purple-100 text-purple-700",
  },
} as const;
const highlightIcons = [Globe, Sun, Utensils, Mountain, Music, Landmark];
const overviewIcons = [Sparkles, Globe, Landmark, Sun, Users, Mountain];
const comparisonRows = [
  {
    label: "Tuition Fees / Year",
    armenia: replaceCurrencySymbol("$3,500 – $5,500"),
    india: replaceCurrencySymbol("$15,000 – $18,000"),
    uk: replaceCurrencySymbol("$60,000 – $80,000"),
  },
  {
    label: "Hostel / Year",
    armenia: replaceCurrencySymbol("$600 – $1,200"),
    india: replaceCurrencySymbol("$1,500 – $3,000"),
    uk: replaceCurrencySymbol("$8,000 – $15,000"),
  },
  {
    label: "Food / Month",
    armenia: replaceCurrencySymbol("$150 – $250"),
    india: replaceCurrencySymbol("$150 – $300"),
    uk: replaceCurrencySymbol("$800 – $1,200"),
  },
];
const geographyHighlights = [
  {
    icon: Mountain,
    iconColor: "text-red-600",
    text: "Landlocked mountainous nation in the South Caucasus region",
  },
  {
    icon: Globe,
    iconColor: "text-emerald-600",
    text: "Crossroads of Europe and Asia with rich Eurasian heritage",
  },
  {
    icon: Sun,
    iconColor: "text-violet-600",
    text: "Home to Lake Sevan, one of the world's largest high-altitude alpine lakes",
  },
  {
    icon: MapPinned,
    iconColor: "text-cyan-600",
    text: "Bordered by Georgia, Turkey, Iran, and Azerbaijan",
  },
];
const climateZones = [
  {
    icon: Sun,
    iconColor: "text-red-600",
    text: "Highland continental climate with four distinct vibrant seasons",
  },
  {
    icon: Clock3,
    iconColor: "text-red-500",
    text: "Warm, sunny summers with pleasant mountain breezes (25°C – 33°C)",
  },
  {
    icon: Sparkles,
    iconColor: "text-violet-500",
    text: "Snowy, picturesque winters ideal for mountain travel and skiing (-5°C – 5°C)",
  },
  {
    icon: CheckCircle,
    iconColor: "text-emerald-500",
    text: "Over 2,700 hours of clear sunshine annually across the country",
  },
];
const armeniaAttractions = [
  {
    icon: Landmark,
    title: "Republic Square & Cascade",
    description: "The architectural center and cultural heart of Yerevan",
  },
  {
    icon: Sun,
    title: "Lake Sevan",
    description:
      "Breathtaking high-altitude alpine lake known as Armenia's blue eye",
  },
  {
    icon: Mountain,
    title: "Tatev Monastery & Cable Car",
    description:
      "Medieval monastery reached by the world's longest reversible aerial tramway",
  },
  {
    icon: Globe,
    title: "Garni Temple & Geghard",
    description:
      "Ancient Greco-Roman temple and UNESCO World Heritage rock-cut monastery",
  },
];
const transportPoints = [
  {
    icon: Plane,
    iconColor: "text-red-600",
    text: "Zvartnots International Airport (EVN) connects Yerevan directly with major international hubs",
  },
  {
    icon: Bus,
    iconColor: "text-orange-600",
    text: "Yerevan Metro system, buses, and minibuses (marshrutkas) provide fast and cheap daily transport",
  },
  {
    icon: Globe,
    iconColor: "text-violet-600",
    text: "Ride-hailing apps like Yandex Taxi offer reliable, low-cost transport anywhere in cities",
  },
  {
    icon: MapPinned,
    iconColor: "text-emerald-600",
    text: "Well-paved highways and regional transport connect university towns across Armenia",
  },
];
const visaOnboardingPoints = [
  {
    icon: CheckCircle,
    iconColor: "text-emerald-600",
    text: "Straightforward student visa & residence permit procedure for international applicants",
  },
  {
    icon: Clock3,
    iconColor: "text-orange-600",
    text: "Quick processing times with official university invitation letters",
  },
  {
    icon: Plane,
    iconColor: "text-red-600",
    text: "Universities provide dedicated legal assistance for student residence registration",
  },
  {
    icon: Heart,
    iconColor: "text-red-500",
    text: "Airport pick-up, hostel allotment, and local orientation offered for all new arrivals",
  },
];
const healthcareCards = [
  {
    title: "Public Healthcare",
    description:
      "Armenia's network of state medical centers and university teaching hospitals provide essential healthcare services and strong clinical rotation exposure.",
    accent: "border-sky-200",
  },
  {
    title: "Private Healthcare",
    description:
      "Modern private clinics in Yerevan feature state-of-the-art diagnostic technology, multi-specialty departments, and English-speaking doctors.",
    accent: "border-emerald-200",
  },
  {
    title: "Student Health Support",
    description:
      "Medical universities provide international students with health insurance guidance, campus clinics, and direct referral support.",
    accent: "border-violet-200",
  },
];
export default async function AboutArmeniaPage() {
  const content = await getAboutCountryContent();
  const stats = content.summaryStats.map((item, index) => {
    const icons = [Building2, Users, Languages, DollarSign];
    const eyebrows = ["City", "People", "Language", "Currency"];
    return {
      ...item,
      eyebrow: eyebrows[index % eyebrows.length],
      icon: icons[index % icons.length],
    };
  });
  const highlights = [
    {
      title: "First Christian Nation",
      description:
        "Armenia was the first country in the world to adopt Christianity as its official state religion in 301 AD.",
      theme: "blue" as const,
    },
    {
      title: "Ancient Heritage",
      description:
        "Armenia has an ancient civilization featuring a unique script created by Mesrop Mashtots in 405 AD.",
      theme: "green" as const,
    },
    {
      title: "High Literacy Rate",
      description:
        "Armenia boasts a 99.7% literacy rate with long-standing traditions in medical & scientific research.",
      theme: "amber" as const,
    },
    {
      title: "Geography & Mountains",
      description:
        "Nestled in the South Caucasus, Armenia features scenic mountainous terrain, alpine lakes, and fertile valleys.",
      theme: "purple" as const,
    },
    {
      title: "Safety & Hospitality",
      description:
        "Ranked among the safest countries in the world for international students with warm Caucasian hospitality.",
      theme: "red" as const,
    },
    {
      title: "Continental Climate",
      description:
        "Enjoys four distinct seasons with warm sunny summers and snowy winters perfect for skiing.",
      theme: "blue" as const,
    },
  ].map((item, index) => ({
    ...item,
    icon: highlightIcons[index % highlightIcons.length],
    style: themeStyles[item.theme],
  }));
  const overviewCards = content.overviewCards
    .slice(0, 6)
    .map((item, index) => ({
      ...item,
      icon: overviewIcons[index % overviewIcons.length],
      style: themeStyles[item.theme],
    }));
  const attractions = content.attractions.slice(0, 5).map((item, index) => {
    const icons = [Mountain, Sun, Tent];
    return {
      ...item,
      icon: icons[index % icons.length],
      style: themeStyles[item.theme],
    };
  });
  const cuisines = content.cuisines.slice(0, 5).map((item, index) => {
    return { ...item, icon: Utensils, style: themeStyles[item.theme] };
  });
  const quickFacts = [
    {
      title: "Capital",
      value: stats.find((stat) => stat.label === "Capital")?.value || "Yerevan",
      icon: Building2,
      style: themeStyles.blue,
    },
    {
      title: "Population",
      value:
        stats.find((stat) => stat.label === "Population")?.value ||
        "3 Million+",
      icon: Users,
      style: themeStyles.green,
    },
    {
      title: "Languages",
      value:
        stats.find((stat) => stat.label === "Languages")?.value ||
        "Armenian, Russian, English",
      icon: Languages,
      style: themeStyles.purple,
    },
    {
      title: "Currency",
      value:
        stats.find((stat) => stat.label === "Currency")?.value ||
        "AMD (Armenian Dram)",
      icon: DollarSign,
      style: themeStyles.amber,
    },
    {
      title: "Location",
      value: content.location || "South Caucasus region, Eurasia",
      icon: MapPinned,
      style: themeStyles.red,
    },
    {
      title: "Timezone",
      value: content.timezone || "GMT+4 (AMT)",
      icon: Clock3,
      style: themeStyles.green,
    },
    {
      title: "Independence",
      value: content.independenceDay || "21 September 1991",
      icon: Flag,
      style: themeStyles.amber,
    },
    {
      title: "Highest Peak",
      value: `${content.highestPeak || "Mount Aragats"} (${content.highestPeakHeight || "4,090 m"})`,
      icon: Mountain,
      style: themeStyles.blue,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {" "}
      <section className="relative overflow-hidden bg-[#EAF1FB]0 py-20 text-gray-900">
        {" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(153,27,27,0.18),transparent_32%)]" />{" "}
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          {" "}
          <div className="mb-6">
            {" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-red-600/80 px-6 py-2.5 text-xl font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ">
              {" "}
              <MapPinned className="h-5 w-5" /> About Armenia{" "}
            </span>{" "}
          </div>{" "}
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            {content.heroTitle || "Life and Study in Armenia"}
          </h1>{" "}
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
            {content.heroDescription ||
              "Discover why Armenia is a top choice for international medical students offering WHO & NMC recognized MBBS programs, low tuition fees, and rich cultural heritage."}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section className="mx-auto max-w-7xl px-4 py-10">
        {" "}
        <div className="mb-8 text-center">
          {" "}
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Country Snapshot
          </span>{" "}
          <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
            Quick Facts About Armenia
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {" "}
            Capital, population, languages, currency, and student budget
            insights at a glance before you choose your MBBS university.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {" "}
          {quickFacts.map((fact) => (
            <article
              key={fact.title}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${fact.style.softPanel} ${fact.style.ringHover}`}
            >
              {" "}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${fact.style.wash}`}
              />{" "}
              <div className="relative">
                {" "}
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${fact.style.iconWrap} ${fact.style.iconHover}`}
                >
                  {" "}
                  <fact.icon className="h-6 w-6" />{" "}
                </div>{" "}
                <h3
                  className={`text-lg font-bold text-gray-900 transition-colors duration-300 ${fact.style.titleHover}`}
                >
                  {fact.title}
                </h3>{" "}
                <p className="mt-2 text-sm leading-relaxed text-gray-900">
                  {fact.value}
                </p>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {" "}
        <div className="mb-12 text-center">
          {" "}
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Why Armenia?
          </span>{" "}
          <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
            A Top Destination for MBBS Aspirants
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {" "}
            Armenia offers globally accredited medical education with modern
            infrastructure, 100% English-medium instruction, and high clinical
            exposure.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {" "}
          {highlights.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.style.ringHover}`}
            >
              {" "}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`}
              />{" "}
              <div className="relative">
                {" "}
                <div className="mb-4 flex items-center gap-4">
                  {" "}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover}`}
                  >
                    {" "}
                    <item.icon className="h-6 w-6" />{" "}
                  </div>{" "}
                  <h3
                    className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}
                  >
                    {item.title}
                  </h3>{" "}
                </div>{" "}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-gray-50 py-16">
        {" "}
        <div className="mx-auto max-w-7xl px-4">
          {" "}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {" "}
            <div>
              {" "}
              <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Did You Know?
              </span>{" "}
              <h2 className="mt-2 mb-8 text-3xl font-bold text-gray-900">
                Armenia Education Facts
              </h2>{" "}
              <div className="space-y-4">
                {" "}
                {[
                  "High Educational Standards: Adult literacy rate is 99.7% with a century-long tradition of medical education.",
                  "Global Accreditation: Medical universities in Armenia are recognized by WHO, NMC (India), ECFMG (USA), FAIMER, and WDOMS.",
                  "English-Medium Instruction: Complete 6-year MBBS / MD General Medicine program is taught in English for international students.",
                  "Strong Clinical Exposure: Hands-on practical training in top government multi-specialty hospitals and clinics across Yerevan.",
                  "Affordable Living & Fees: Tuition fees start from as low as $3,500/year with low cost of living compared to Western nations.",
                ].map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    {" "}
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />{" "}
                    <p className="text-gray-700">{fact}</p>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div className="rounded-3xl bg-white p-8">
              {" "}
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                Cost Comparison
              </h3>{" "}
              <div className="space-y-4">
                {" "}
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl bg-white p-4 shadow-sm border border-gray-100"
                  >
                    {" "}
                    <div className="mb-3 text-sm font-bold text-gray-800">
                      {row.label}
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-3 text-xs leading-normal">
                      {" "}
                      <div className="text-center">
                        {" "}
                        <div className="font-bold text-green-600 mb-1">
                          {row.armenia}
                        </div>{" "}
                        <div className="text-[10px] uppercase font-medium tracking-wider text-gray-500">
                          Armenia
                        </div>{" "}
                      </div>{" "}
                      <div className="text-center border-l border-gray-100">
                        {" "}
                        <div className="font-bold text-gray-700 mb-1">
                          {row.india}
                        </div>{" "}
                        <div className="text-[10px] uppercase font-medium tracking-wider text-gray-500">
                          India (Pvt)
                        </div>{" "}
                      </div>{" "}
                      <div className="text-center border-l border-gray-100">
                        {" "}
                        <div className="font-bold text-gray-700 mb-1">
                          {row.uk}
                        </div>{" "}
                        <div className="text-[10px] uppercase font-medium tracking-wider text-gray-500">
                          UK
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {overviewCards.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 py-16">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
              MBBS Education Hub
            </span>{" "}
            <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
              International recognition with modern medical training
            </h2>{" "}
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {" "}
              Armenia is a preferred MBBS destination with globally aligned
              curriculum, English-medium pathways, and quality clinical
              exposure.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {overviewCards.map((item) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.style.softPanel} ${item.style.ringHover}`}
              >
                {" "}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`}
                />{" "}
                <div className="relative">
                  {" "}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover}`}
                  >
                    {" "}
                    <item.icon className="h-6 w-6" />{" "}
                  </div>{" "}
                  <h3
                    className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}
                  >
                    {item.title}
                  </h3>{" "}
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    {item.description}
                  </p>{" "}
                </div>{" "}
              </article>
            ))}{" "}
          </div>{" "}
        </section>
      ) : null}{" "}
      {content.universityCities.length > 0 ? (
        <section className="bg-gray-50 py-16">
          {" "}
          <div className="mx-auto max-w-7xl px-4">
            {" "}
            <div className="mb-12 text-center">
              {" "}
              <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Major University Cities
              </span>{" "}
              <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                Urban hubs for MBBS universities in Armenia
              </h2>{" "}
              <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                {" "}
                City-level highlights based on active medical institutions and
                student-friendly environment.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {" "}
              {content.universityCities.slice(0, 3).map((city, index) => {
                const gradients = [" ", " ", " "];
                const gradient = gradients[index % gradients.length];
                return (
                  <article
                    key={city.city}
                    className={`rounded-[1.75rem] bg-gradient-to-br ${gradient} p-7 text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    {" "}
                    <h3 className="text-2xl font-bold">
                      {" "}
                      {index === 0
                        ? "Yerevan"
                        : index === 1
                          ? "Gyumri"
                          : city.city}{" "}
                    </h3>{" "}
                    {index === 0 ? (
                      <div className="mt-6 space-y-6 text-sm leading-relaxed text-gray-900/90">
                        {" "}
                        <section>
                          {" "}
                          <h4 className="flex items-center gap-2 text-md font-bold text-gray-900">
                            {" "}
                            <span>🏫</span> About Yerevan State Medical
                            University (YSMU){" "}
                          </h4>{" "}
                          <p className="mt-2">
                            {" "}
                            Yerevan State Medical University (YSMU), founded in
                            1920, is the leading medical institution in Armenia.
                            Named after Mkhitar Heratsi, it has educated
                            thousands of international doctors over its
                            century-long history.{" "}
                          </p>{" "}
                          <p className="mt-2">
                            {" "}
                            Located in the heart of Yerevan, YSMU offers
                            state-of-the-art research laboratories, digital
                            classrooms, and clinical training across major
                            government multi-specialty hospitals.{" "}
                          </p>{" "}
                        </section>{" "}
                        <section>
                          {" "}
                          <h5 className="flex items-center gap-2 font-bold text-gray-900">
                            {" "}
                            <span>📜</span> History & Heritage{" "}
                          </h5>{" "}
                          <ul className="mt-2 list-inside list-disc space-y-1">
                            {" "}
                            <li>
                              Established in 1920 as the flagship medical school
                              of Armenia
                            </li>{" "}
                            <li>
                              Over 100 years of academic excellence in medical
                              science
                            </li>{" "}
                            <li>
                              Attracts medical students from India, Europe,
                              Asia, and the Americas
                            </li>{" "}
                            <li>
                              Alumni practicing successfully across WHO & NMC
                              member states
                            </li>{" "}
                          </ul>{" "}
                        </section>{" "}
                        <section>
                          {" "}
                          <h5 className="flex items-center gap-2 font-bold text-gray-900">
                            {" "}
                            <span>🎓</span> Courses & Duration{" "}
                          </h5>{" "}
                          <div className="mt-2 space-y-3">
                            {" "}
                            <div>
                              {" "}
                              <p className="font-semibold text-gray-900">
                                MD / MBBS General Medicine
                              </p>{" "}
                              <ul className="mt-1 list-inside list-disc space-y-1">
                                {" "}
                                <li>
                                  Duration: 6 years (5 years coursework + 1 year
                                  clinical internship)
                                </li>{" "}
                                <li>Medium of Instruction: 100% English</li>{" "}
                                <li>
                                  Curriculum aligned with NEXT (India), USMLE
                                  (USA), PLAB (UK)
                                </li>{" "}
                              </ul>{" "}
                            </div>{" "}
                          </div>{" "}
                        </section>{" "}
                        <section>
                          {" "}
                          <h5 className="flex items-center gap-2 font-bold text-gray-900">
                            {" "}
                            <span>🌍</span> Recognition & Accreditation{" "}
                          </h5>{" "}
                          <ul className="mt-2 list-inside list-disc space-y-1">
                            {" "}
                            <li>World Health Organization (WHO)</li>{" "}
                            <li>National Medical Commission (NMC), India</li>{" "}
                            <li>
                              Educational Commission for Foreign Medical
                              Graduates (ECFMG), USA
                            </li>{" "}
                            <li>
                              World Directory of Medical Schools (WDOMS) &
                              FAIMER
                            </li>{" "}
                          </ul>{" "}
                        </section>{" "}
                        <section>
                          {" "}
                          <h5 className="flex items-center gap-2 font-bold text-gray-900">
                            {" "}
                            <span>🏥</span> Clinical Hospitals & Facilities{" "}
                          </h5>{" "}
                          <ul className="mt-2 list-inside list-disc space-y-1">
                            {" "}
                            <li>Heratsi Hospital Complex No. 1</li>{" "}
                            <li>Muratsan University Hospital Complex</li>{" "}
                            <li>
                              Armenia Medical Center & St. Gregory the
                              Illuminator Medical Center
                            </li>{" "}
                            <li>
                              Over 3,000 hospital beds for direct patient
                              exposure
                            </li>{" "}
                          </ul>{" "}
                        </section>{" "}
                      </div>
                    ) : index === 1 ? (
                      <div className="mt-6 space-y-6 text-sm leading-relaxed text-gray-900/90">
                        {" "}
                        <section>
                          {" "}
                          <h4 className="flex items-center gap-2 text-md font-bold text-gray-900">
                            {" "}
                            <span>🏙️</span> About Gyumri{" "}
                          </h4>{" "}
                          <p className="mt-2">
                            {" "}
                            Gyumri is the second largest city in Armenia and
                            serves as the cultural capital of the country. Known
                            for its distinct 19th-century black tufa
                            architecture, historic urban center, and rich
                            artistic traditions.{" "}
                          </p>{" "}
                        </section>{" "}
                        <section>
                          {" "}
                          <h5 className="flex items-center gap-2 font-bold text-gray-900">
                            {" "}
                            <span>🏥</span> Healthcare & Education Hub{" "}
                          </h5>{" "}
                          <ul className="mt-2 list-inside list-disc space-y-1">
                            {" "}
                            <li>
                              Gyumri Medical Center provides modern regional
                              healthcare services
                            </li>{" "}
                            <li>
                              Peaceful, student-friendly town with low cost of
                              living
                            </li>{" "}
                            <li>
                              Well-connected to Yerevan by high-speed electric
                              trains
                            </li>{" "}
                          </ul>{" "}
                        </section>{" "}
                      </div>
                    ) : (
                      <p className="mt-4 text-sm leading-8 text-gray-900/90">
                        {city.description}
                      </p>
                    )}{" "}
                    {index !== 2 && (
                      <div className="mt-6 space-y-3 text-gray-900/90">
                        {" "}
                        <div className="flex items-center gap-2.5 text-sm">
                          {" "}
                          <Users className="h-5 w-5" />{" "}
                          <span>
                            {" "}
                            {city.universityCount} listed universit
                            {city.universityCount === 1 ? "y" : "ies"}{" "}
                          </span>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-2.5 text-sm">
                          {" "}
                          <Sparkles className="h-5 w-5" />{" "}
                          <span>
                            {city.universityNames.slice(0, 2).join(" • ")}
                          </span>{" "}
                        </div>{" "}
                        {city.avgTuition ? (
                          <div className="flex items-center gap-2.5 text-sm">
                            {" "}
                            <DollarSign className="h-5 w-5" />{" "}
                            <span>Tuition: {city.avgTuition}</span>{" "}
                          </div>
                        ) : null}{" "}
                      </div>
                    )}{" "}
                  </article>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
        </section>
      ) : null}{" "}
      <section className="bg-slate-100 py-14">
        {" "}
        <div className="mx-auto max-w-7xl px-4">
          {" "}
          <div className="mx-auto max-w-4xl text-center">
            {" "}
            <h2 className="text-3xl font-bold text-slate-800 lg:text-4xl">
              Geography and Climate
            </h2>{" "}
            <p className="mt-4 text-base leading-7 text-slate-700">
              {" "}
              A mountainous land in the South Caucasus known for sunny weather,
              alpine lakes, and safe urban life.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {" "}
            <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
              {" "}
              <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                Geography Highlights
              </h3>{" "}
              <ul className="mt-6 space-y-4">
                {" "}
                {geographyHighlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3.5">
                    {" "}
                    <item.icon
                      className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`}
                    />{" "}
                    <p className="text-base leading-7 text-slate-700">
                      {item.text}
                    </p>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </article>{" "}
            <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
              {" "}
              <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                Climate Zones
              </h3>{" "}
              <ul className="mt-6 space-y-4">
                {" "}
                {climateZones.map((item) => (
                  <li key={item.text} className="flex items-start gap-3.5">
                    {" "}
                    <item.icon
                      className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`}
                    />{" "}
                    <p className="text-base leading-7 text-slate-700">
                      {item.text}
                    </p>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </article>{" "}
          </div>{" "}
          <div className="mt-8 rounded-[2rem] border border-gray-200/20 bg-orange-500 px-6 py-8 text-gray-900 shadow-lg lg:px-10">
            {" "}
            <h3 className="text-center text-2xl font-bold lg:text-3xl">
              Top Attractions in Armenia
            </h3>{" "}
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {" "}
              {armeniaAttractions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-gray-100 p-4 text-center ring-1 ring-white/15 "
                >
                  {" "}
                  <item.icon className="mx-auto h-8 w-8 text-red-600" />{" "}
                  <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>{" "}
                  <p className="mt-2 text-sm leading-6 text-red-50">
                    {item.description}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-slate-100 py-14">
        {" "}
        <div className="mx-auto max-w-7xl px-4">
          {" "}
          <div className="mx-auto max-w-4xl text-center">
            {" "}
            <Plane className="mx-auto h-10 w-10 text-red-600" />{" "}
            <h2 className="mt-4 text-3xl font-bold text-slate-800 lg:text-4xl">
              Travel and Connectivity
            </h2>{" "}
            <p className="mt-4 text-base leading-7 text-slate-700">
              {" "}
              Direct flights, modern transport infrastructure, and simple
              student visa guidelines make student onboarding seamless.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {" "}
            <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
              {" "}
              <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                Transportation
              </h3>{" "}
              <ul className="mt-6 space-y-4">
                {" "}
                {transportPoints.map((item) => (
                  <li key={item.text} className="flex items-start gap-3.5">
                    {" "}
                    <item.icon
                      className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`}
                    />{" "}
                    <p className="text-base leading-7 text-slate-700">
                      {item.text}
                    </p>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </article>{" "}
            <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
              {" "}
              <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                Visa and Onboarding
              </h3>{" "}
              <ul className="mt-6 space-y-4">
                {" "}
                {visaOnboardingPoints.map((item) => (
                  <li key={item.text} className="flex items-start gap-3.5">
                    {" "}
                    <item.icon
                      className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`}
                    />{" "}
                    <p className="text-base leading-7 text-slate-700">
                      {item.text}
                    </p>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-teal-50 py-14">
        {" "}
        <div className="mx-auto max-w-7xl px-4">
          {" "}
          <div className="mx-auto max-w-4xl text-center">
            {" "}
            <Stethoscope className="mx-auto h-11 w-11 text-emerald-600" />{" "}
            <h2 className="mt-4 text-3xl font-bold text-slate-800 lg:text-4xl">
              Healthcare System
            </h2>{" "}
            <p className="mt-4 text-base leading-7 text-slate-700">
              {" "}
              Healthcare access for students is supported through campus medical
              desks and city-wide healthcare networks.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {" "}
            {healthcareCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-3xl border-t-4 bg-white p-6 shadow-sm ring-1 ring-slate-100 ${card.accent}`}
              >
                {" "}
                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>{" "}
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {card.description}
                </p>{" "}
              </article>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {cuisines.length > 0 || attractions.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 py-16">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Cuisine and Student Life
            </span>{" "}
            <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
              Food, culture, and lifestyle across Armenia
            </h2>{" "}
          </div>{" "}
          <div className="grid gap-8 lg:grid-cols-2">
            {" "}
            <div>
              {" "}
              <div className="mb-5 flex items-center gap-3">
                {" "}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF1FB] text-red-600">
                  {" "}
                  <Utensils className="h-5 w-5" />{" "}
                </div>{" "}
                <h3 className="text-2xl font-bold text-gray-900">
                  Popular cuisines
                </h3>{" "}
              </div>{" "}
              <div className="space-y-4">
                {" "}
                {cuisines.map((item) => (
                  <article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.style.ringHover}`}
                  >
                    {" "}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`}
                    />{" "}
                    <div className="relative">
                      {" "}
                      <div className="flex items-start gap-4 lg:gap-5">
                        {" "}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover} shadow-sm`}
                        >
                          {" "}
                          <item.icon className="h-6 w-6" />{" "}
                        </div>{" "}
                        <div className="flex-1 pt-1">
                          {" "}
                          <h4
                            className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}
                          >
                            {item.title}
                          </h4>{" "}
                          <p className="mt-3 text-sm leading-relaxed text-gray-600">
                            {item.description}
                          </p>{" "}
                          {item.image && (
                            <div className="relative mt-4 h-40 w-full overflow-hidden rounded-2xl">
                              {" "}
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 400px"
                              />{" "}
                            </div>
                          )}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </article>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <div className="mb-5 flex items-center gap-3">
                {" "}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-400 text-red-600">
                  {" "}
                  <Mountain className="h-5 w-5" />{" "}
                </div>{" "}
                <h3 className="text-2xl font-bold text-gray-900">
                  Places and experiences
                </h3>{" "}
              </div>{" "}
              <div className="space-y-4">
                {" "}
                {attractions.map((item) => (
                  <article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.style.ringHover}`}
                  >
                    {" "}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`}
                    />{" "}
                    <div className="relative">
                      {" "}
                      <div className="flex items-start gap-4 lg:gap-5">
                        {" "}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover} shadow-sm`}
                        >
                          {" "}
                          <item.icon className="h-6 w-6" />{" "}
                        </div>{" "}
                        <div className="flex-1 pt-1">
                          {" "}
                          <h4
                            className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}
                          >
                            {item.title}
                          </h4>{" "}
                          <p className="mt-3 text-sm leading-relaxed text-gray-600">
                            {item.description}
                          </p>{" "}
                          {item.image && (
                            <div className="relative mt-4 h-40 w-full overflow-hidden rounded-2xl">
                              {" "}
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 400px"
                              />{" "}
                            </div>
                          )}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </article>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      ) : null}{" "}
      <section className="bg-[#EAF1FB]0 py-16 text-gray-900">
        {" "}
        <div className="mx-auto max-w-4xl px-4 text-center">
          {" "}
          <h2 className="text-3xl font-bold lg:text-4xl">
            Ready to choose Armenia for your MBBS journey?
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {" "}
            Compare top universities, tuition fees, and admission guidance to
            plan your MBBS journey in Armenia.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {" "}
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-600 font-bold px-7 py-3 rounded-full transition-colors"
            >
              {" "}
              Explore Universities <ArrowRight className="h-4 w-4" />{" "}
            </Link>{" "}
            <Link
              href="/contact-us"
              className="rounded-full bg-green-600 text-white hover:bg-green-700 font-bold px-7 py-3 transition-colors"
            >
              {" "}
              Call Us{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  ExternalLink,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  LibraryBig,
  Link2 as LinkIcon,
  School,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getEducationSystemContent } from "@/lib/public-page-content";

export const metadata: Promise<Metadata> = buildMetadata({
  title:
    "Education System in Armenia - MBBS Degree Structure | mbbsinarmenia.com",
  description:
    "Learn about Armenia's medical education system, MBBS degree structure, recognition pathways, language support, and academic progression.",
  entitySeo: {
    metaKeyword:
      "Armenia education system, mbbs Armenia curriculum, Armenia medical degree, NMC approved Armenia, FMGE Armenia",
  },
  path: "/education-system",
  pageKey: "education-system",
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

const summaryIcons = [School, LibraryBig, BookOpen, GraduationCap];
const focusIcons = [BookOpen, School, Globe2, GraduationCap];
const timelineIcons = [Layers3, BookOpen, GraduationCap, LibraryBig];
const detailIcons = [Languages, LibraryBig, GraduationCap, School];

function getLanguageCardIcon(label: string, value: string, detail?: string) {
  const text = `${label} ${value} ${detail ?? ""}`.toLowerCase();

  if (/(english|instruction|school|medium)/.test(text)) return BookOpen;
  if (/(french|international|global|media|commerce)/.test(text)) return Globe2;
  if (/(creole|native|local|bilingual|multilingual|language)/.test(text))
    return Languages;

  return School;
}

export default async function EducationSystemPage() {
  const content = await getEducationSystemContent();

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-white py-16 text-gray-900 lg:py-20">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-gray-100 hidden" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gray-900/20 hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-gray-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] ">
              <Globe2 className="h-4 w-4" />
              Education System
            </span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl text-4xl font-bold leading-tight lg:text-6xl">
            Education System in Armenia
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 lg:text-xl">
            {content.description}
          </p>
        </div>
      </section>

      <section className="-mt-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {content.summaryStats.map((stat, index) => {
              const Icon = summaryIcons[index % summaryIcons.length];

              return (
                <article
                  key={stat.label}
                  className="group rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg hover:"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF1FB] text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-gray-900">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                    {stat.label}
                  </div>
                  <div className="text-xl font-bold text-slate-900 lg:text-2xl">
                    {stat.value}
                  </div>
                  {stat.detail ? (
                    <div className="mt-2 text-sm leading-relaxed text-slate-500">
                      {stat.detail}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-7">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Introduction
              </span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Introduction to Armenia Education System
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700">
                Armenia has one of the most advanced and structured education
                systems in Africa
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white via-white p-7 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Supporting Context
              </span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                What shapes the system today
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Key policy, institutional, and academic influences that define
                how medical education is delivered across the country.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {content.supportingNarrative.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Accreditation
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              Main Education Authorities & Accreditations in Armenia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-sm leading-7">
              Explore the regulatory bodies, ministries, and quality assurance
              frameworks that govern both school and higher medical education.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Ministry of Education (School Education)",
                description:
                  "Governs Pre-primary, Primary, and Secondary education. Responsible for policy, curriculum, and national approvals.",
                role: "National curriculum, School approvals, Teacher regulations",
                portal: "https://education.govmu.org",
                icon: Building2,
                theme: "red",
              },
              {
                title: "Ministry of Tertiary Education",
                description:
                  "Governs Universities, Medical colleges, and Higher institutions. Focuses on policy, research, and innovation.",
                role: "Higher education policy, University approvals, Research & Science",
                portal: "https://tertiaryeducation.govmu.org",
                icon: GraduationCap,
                theme: "blue",
              },
              {
                title: "Higher Education Commission (HEC)",
                description:
                  "Primary body for university registration, programme accreditation, and quality assurance for 30+ private institutions.",
                role: "Degree recognition, Programme accreditation, Equivalence checks",
                portal: "https://www.hec.mu",
                subLink: {
                  label: "Recognition Portal",
                  url: "https://www.hec.mu/recognition_equivalence",
                },
                icon: ShieldCheck,
                theme: "green",
              },
              {
                title: "Armenia Qualifications Authority (MQA)",
                description:
                  "Accredits TVET courses and maintains the National Qualifications Framework from Level 1 to PhD (Level 10).",
                role: "Technical accreditation, NQF levels, Foreign qualification recognition",
                portal: "https://mqa.govmu.org",
                subLink: {
                  label: "MQA Register",
                  url: "https://mqaeservices.org/mqa-registers",
                },
                icon: Award,
                theme: "amber",
              },
              {
                title: "Tertiary Education Commission (HEC Synergy)",
                description:
                  "Functions of the former TEC are now integrated into HEC for unified planning and funding of the tertiary sector.",
                role: "Funding universities, Strategic planning, Institutional accreditation",
                icon: Layers3,
                theme: "purple",
              },
              {
                title: "Armenia Institute of Training & Development",
                description:
                  "Lead institution for technical and vocational training and professional skills development programs.",
                role: "TVET training, Skills development, Vocational excellence",
                portal: "https://www.armeniaeducationinitiative.org/en/programs",
                icon: Briefcase,
                theme: "blue",
              },
              {
                title: "Medical Council of Armenia (For MBBS)",
                description:
                  "Critical for MBBS students. Registers doctors, recognizes medical degrees, and approves medical colleges.",
                role: "Doctor registration, Degree recognition, Institution approvals",
                portal: "https://www.medicalcouncil-armenia.org/en/",
                icon: Stethoscope,
                theme: "red",
              },
              {
                title: "International Recognition",
                description:
                  "Armenia medical degrees are globally accepted, allowing graduates to pursue careers in India, UK, USA, and beyond.",
                role: "WHO (WDOMS), NMC (India), ECFMG (USA), GMC (UK), QAA",
                icon: Globe2,
                theme: "green",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const styles =
                themeStyles[item.theme as keyof typeof themeStyles];

              return (
                <article
                  key={item.title}
                  className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.softPanel} ${styles.ringHover}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.wash}`}
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${styles.iconWrap} ${styles.iconHover}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3
                        className={`text-base font-bold text-slate-900 leading-snug transition-colors duration-300 ${styles.titleHover}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-2.5">
                      <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/50">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          <div className="h-1 w-1 rounded-full bg-slate-400" />
                          Key Role
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-slate-700 leading-relaxed">
                          {item.role}
                        </p>
                      </div>

                      {item.portal ? (
                        <div className="pt-2">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Official Website
                          </div>
                          <a
                            href={item.portal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm font-medium text-red-600 hover:text-[#285BB5] transition-colors"
                          >
                            <span className="truncate group-hover/link:underline">
                              {item.portal.replace(/^https?:\/\//, "")}
                            </span>
                            <ExternalLink className="h-3 w-3 shrink-0 opacity-40 group-hover/link:opacity-100" />
                          </a>
                        </div>
                      ) : null}

                      {(item as any).subLink ? (
                        <div className="pt-2 border-t border-slate-100/50 mt-2">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            {(item as any).subLink.label}
                          </div>
                          <a
                            href={(item as any).subLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#285BB5] transition-colors"
                          >
                            <span className="truncate group-hover/link:underline">
                              {(item as any).subLink.url.replace(
                                /^https?:\/\//,
                                "",
                              )}
                            </span>
                            <LinkIcon className="h-2.5 w-2.5 shrink-0 opacity-40 group-hover/link:opacity-100" />
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Academic Progression
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              How the MBBS journey progresses in Armenia
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Follow each stage from foundational learning to advanced clinical
              training, with key outcomes at every step.
            </p>
          </div>

          <div className="space-y-4">
            {content.timeline.map((item, index) => {
              const Icon = timelineIcons[index % timelineIcons.length];
              const styles = themeStyles[item.theme];

              return (
                <article
                  key={`${item.label}-${item.title}`}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.ringHover}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.wash}`}
                  />
                  <div className="relative flex flex-col gap-4 lg:flex-row">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl transition-all duration-300 ${styles.iconWrap} ${styles.iconHover}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles.pill}`}
                        >
                          {item.label}
                        </span>
                        {item.duration ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                            {item.duration}
                          </span>
                        ) : null}
                      </div>

                      <h3
                        className={`mt-3 text-xl font-bold text-slate-900 transition-colors duration-300 ${styles.titleHover}`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {item.description}
                      </p>

                      {item.points.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {item.meta ? (
                      <div className="min-w-40 rounded-2xl bg-slate-50 p-3.5 text-sm leading-6 text-slate-600 ring-1 ring-slate-100">
                        {item.meta}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Degree Pathways
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              Programs aligned with Armenia medical pathways
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Compare available degree options, course duration, and recognition
              highlights for each academic route.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white via-white p-6 shadow-sm lg:p-7">
            <div className="grid gap-3.5 lg:grid-cols-2">
              {content.degreeCards.map((card, index) => {
                const styles =
                  themeStyles[
                  (card.theme ?? "red") as keyof typeof themeStyles
                  ];
                const isMbbsCard = /mbbs|mbchb|medicine/i.test(card.title);
                const Icon = isMbbsCard
                  ? GraduationCap
                  : detailIcons[index % detailIcons.length];

                return (
                  <article
                    key={card.title}
                    className={`group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm ring-1 ring-slate-100/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${styles.ringHover}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.wash}`}
                    />
                    <div className="relative flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${styles.iconWrap} ${styles.iconHover}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-bold text-slate-900 transition-colors duration-300 ${styles.titleHover}`}
                        >
                          {card.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Instruction
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              Languages of instruction
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Understand the primary teaching languages and communication
              support students can expect during training.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.languageCards.map((card, index) => {
              const styles = [
                themeStyles.red,
                themeStyles.blue,
                themeStyles.green,
                themeStyles.purple,
              ][index % 4];
              const Icon = getLanguageCardIcon(
                card.label,
                card.value,
                card.detail,
              );

              return (
                <article
                  key={`${card.label}-${index}`}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.softPanel} ${styles.ringHover}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.wash}`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${styles.iconWrap} ${styles.iconHover}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                      {card.label}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                      {card.value}
                    </h3>
                    {card.detail ? (
                      <p className="mt-4 text-base leading-8 text-slate-700">
                        {card.detail}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Network
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              Institution mix
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Snapshot of the university and institution ecosystem that supports
              MBBS education in Armenia.
            </p>
          </div>
          <div className="space-y-3.5">
            {content.institutionCards.map((card, index) => (
              <article
                key={`${card.label}-${index}`}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:"
              >
                <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 group-hover:text-[#285BB5]">
                    {card.label}
                  </div>
                  <div className="mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                    {card.value}
                  </div>
                  {card.detail ? (
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {card.detail}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Assessments
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
              Examinations and key academic checkpoints
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Overview of exam stages, subject focus, and milestone checkpoints
              used to track academic progression.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {content.examinations.map((exam) => (
              <article
                key={exam.title}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:"
              >
                <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF1FB] text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-gray-900">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#285BB5]">
                      {exam.title}
                    </h3>
                    {exam.gradeLevel ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {exam.gradeLevel}
                      </span>
                    ) : null}
                    {exam.type ? (
                      <span className="rounded-full bg-[#EAF1FB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#285BB5]">
                        {exam.type}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {exam.description}
                  </p>

                  {exam.subjects.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exam.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold lg:text-4xl">
            Ready to compare universities against this education structure?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Move from general education-system research into live university
            options, fees, and counselling support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#285BB5] transition-colors hover:bg-white"
            >
              Browse Universities
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-gray-200 px-7 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Speak with a Counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

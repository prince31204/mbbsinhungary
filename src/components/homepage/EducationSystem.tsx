import Link from "next/link";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  Languages,
  LibraryBig,
} from "lucide-react";
import { getEducationSystemContent } from "@/lib/public-page-content";

const themeStyles = {
  red: "border-gray-200 bg-white hover:border-gray-200 hover:",
  blue: "border-gray-200 bg-white hover:border-gray-200 hover:",
  green: "border-green-200 bg-green-50 hover:border-green-300 hover:",
  amber: "border-gray-200 bg-red-400 hover:border-gray-200 hover:",
  purple: "border-purple-200 bg-purple-50 hover:border-purple-300 hover:",
} as const;

export default async function EducationSystem() {
  const content = await getEducationSystemContent();

  return (
    <section id="education-system" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                {content.introductionTitle}
              </h3>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-700">
              {content.introductionDescription}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.summaryStats.map((stat) => (
                <article
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg hover:"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-[#285BB5]">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                      {stat.value}
                    </div>
                    {stat.detail ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                        {stat.detail}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-slate-900">Focus areas</h3>
            </div>
            <div className="mt-6 space-y-4">
              {content.focusAreas.slice(0, 4).map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg hover:"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#285BB5]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.timeline.slice(0, 3).map((item) => (
            <article
              key={`${item.label}-${item.title}`}
              className={`group rounded-[1.75rem] border-2 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${themeStyles[item.theme]}`}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-[#285BB5]">
                {item.label}
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                {item.description}
              </p>
              {item.points.length > 0 ? (
                <ul className="mt-5 space-y-2">
                  {item.points.slice(0, 4).map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 transition-colors duration-300 group-hover:text-emerald-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Languages className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Language support
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.languageCards.map((card, index) => (
                <article
                  key={`${card.label}-${index}`}
                  className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg hover:"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600 transition-colors duration-300 group-hover:text-[#285BB5]">
                      {card.label}
                    </div>
                    <div className="mt-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                      {card.value}
                    </div>
                    {card.detail ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                        {card.detail}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <LibraryBig className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Institution mix
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.institutionCards.map((card, index) => (
                <article
                  key={`${card.label}-${index}`}
                  className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg hover:"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#EAF1FB]0/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-[#285BB5]">
                      {card.label}
                    </div>
                    <div className="mt-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                      {card.value}
                    </div>
                    {card.detail ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                        {card.detail}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/education-system"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200 px-8 py-4 font-semibold text-red-600 transition-colors hover:bg-red-600 hover:text-gray-900"
          >
            Learn More About the Education System
          </Link>
        </div>
      </div>
    </section>
  );
}

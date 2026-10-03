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
  red: "border-[#DDE5DD] bg-white hover:border-[#DDE5DD]",
  blue: "border-[#DDE5DD] bg-white hover:border-[#DDE5DD]",
  green: "border-green-200 bg-green-50 hover:border-green-300",
  amber: "border-[#DDE5DD] bg-red-400 hover:border-[#DDE5DD]",
  purple: "border-purple-200 bg-purple-50 hover:border-purple-300",
} as const;

export default async function EducationSystem() {
  const content = await getEducationSystemContent();

  return (
    <section id="education-system" className="bg-[#FBF8F0] pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center bg-gradient-to-r from-[#175747] to-[#103D32] rounded-[2rem] p-10 shadow-lg">
          <h2 className="text-4xl font-bold text-white">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-[#DCE8E2]">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-[#A52B3A]" />
              <h3 className="text-2xl font-bold text-[#202D28]">
                {content.introductionTitle}
              </h3>
            </div>
            <p className="mt-5 text-base leading-8 text-[#5F6F67]">
              {content.introductionDescription}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.summaryStats.map((stat) => (
                <article
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-[#FBF8F0] p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#F3F7F3]/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A877F] transition-colors duration-300 group-hover:text-[#175747]">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-[#202D28] transition-colors duration-300 group-hover:text-slate-950">
                      {stat.value}
                    </div>
                    {stat.detail ? (
                      <p className="mt-2 text-sm leading-6 text-[#5F6F67] transition-colors duration-300 group-hover:text-[#5F6F67]">
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
              <BookOpen className="h-6 w-6 text-[#A52B3A]" />
              <h3 className="text-2xl font-bold text-[#202D28]">Focus areas</h3>
            </div>
            <div className="mt-6 space-y-4">
              {content.focusAreas.slice(0, 4).map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl bg-[#FBF8F0] p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#F3F7F3]/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <h4 className="text-lg font-bold text-[#202D28] transition-colors duration-300 group-hover:text-[#175747]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#5F6F67] transition-colors duration-300 group-hover:text-[#5F6F67]">
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
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A877F] transition-colors duration-300 group-hover:text-[#175747]">
                {item.label}
              </div>
              <h3 className="mt-2 text-xl font-bold text-[#202D28] transition-colors duration-300 group-hover:text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5F6F67] transition-colors duration-300 group-hover:text-[#202D28]">
                {item.description}
              </p>
              {item.points.length > 0 ? (
                <ul className="mt-5 space-y-2">
                  {item.points.slice(0, 4).map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-[#5F6F67]"
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
              <Languages className="h-6 w-6 text-[#A52B3A]" />
              <h3 className="text-2xl font-bold text-[#202D28]">
                Language support
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.languageCards.map((card, index) => (
                <article
                  key={`${card.label}-${index}`}
                  className="group relative overflow-hidden rounded-2xl bg-[#FBF8F0] p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:ring-red-200 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#F3F7F3]/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A52B3A] transition-colors duration-300 group-hover:text-[#175747]">
                      {card.label}
                    </div>
                    <div className="mt-2 text-xl font-bold text-[#202D28] transition-colors duration-300 group-hover:text-slate-950">
                      {card.value}
                    </div>
                    {card.detail ? (
                      <p className="mt-2 text-sm leading-6 text-[#5F6F67] transition-colors duration-300 group-hover:text-[#5F6F67]">
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
              <LibraryBig className="h-6 w-6 text-[#A52B3A]" />
              <h3 className="text-2xl font-bold text-[#202D28]">
                Institution mix
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.institutionCards.map((card, index) => (
                <article
                  key={`${card.label}-${index}`}
                  className="group relative overflow-hidden rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-200 transition-all duration-500 hover:-translate-y-1 hover:ring-amber-300 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#F3F7F3]/10 via-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#175747] transition-colors duration-300 group-hover:text-emerald-700">
                      {card.label}
                    </div>
                    <div className="mt-2 text-xl font-bold text-black transition-colors duration-300 group-hover:text-gray-900">
                      {card.value}
                    </div>
                    {card.detail ? (
                      <p className="mt-2 text-sm leading-6 text-black font-medium transition-colors duration-300 group-hover:text-gray-900">
                        {card.detail}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-[#FBF8F0] border border-[#DDE5DD] rounded-[2rem] p-10 shadow-md">
          <Link
            href="/education-system"
            className="inline-flex items-center gap-2 rounded-lg bg-[#A52B3A] px-8 py-4 font-semibold text-white transition-all border border-transparent hover:bg-white hover:text-black hover:border-gray-300 shadow-sm"
          >
            Learn More About the Education System
          </Link>
        </div>
      </div>
    </section>
  );
}

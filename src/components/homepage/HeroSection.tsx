"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Globe,
  Award,
  Building2,
  Stethoscope,
} from "lucide-react";
import { useDownloadModal } from "@/lib/modalContext";
import { HomePageStats } from "@/lib/public-page-content";

const FALLBACK_BROCHURE = "/brochures/Armenia_university.pdf";

interface HeroSectionProps {
  stats: HomePageStats;
}

export default function HeroSection({ stats }: HeroSectionProps) {
  const { openModal } = useDownloadModal();

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#101B4D] via-[#173A7A] to-[#285BB5] text-white">
      {/* Dot pattern */}

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-200">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Official Partner of Top Armenia Medical Universities
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm pb-1">
                MBBS in Armenia
              </h1>

              <p className="text-xl text-[#E5ECF8] leading-relaxed">
                Study MBBS in Armenia at globally accredited medical
                universities with affordable fees, English-medium education, and
                strong clinical exposure plus a clear pathway to obtaining a
                medical practice license in Armenia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/universities"
                className="bg-[#D90012] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8000F] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Universities</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={() => openModal("MBBS in Armenia", FALLBACK_BROCHURE)}
                className="border-2 border-white bg-[#F2A800] hover:bg-[#F29F00] text-black px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer"
                suppressHydrationWarning={true}
              >
                Download Brochure
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {[
                {
                  value: stats.universities,
                  label: "Top Medical Universities",
                },
                { value: stats.students, label: "Indian Students" },
                { value: stats.admissionSupport, label: "Admission Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#F2A800]">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Why Choose Armenia?</h3>
                <p className="text-sm text-red-100">
                  MBBS in Armenia, graduates can apply for medical registration
                  through the Medical Council of Armenia.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Stethoscope className="w-6 h-6 text-white" />,
                    title: "Internship & Hospital Training Opportunities",
                    desc: "Clinical rotations in government and private hospitals enhance practical learning.",
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-white" />,
                    title: "Curriculum Aligned with Global Standards",
                    desc: "Medical programs follow international guidelines, preparing students for exams like NEXT (India), USMLE (USA), and PLAB (UK).",
                  },
                  {
                    icon: <Award className="w-6 h-6 text-white" />,
                    title: "Strong Internship & Licensing Opportunities",
                    desc: "Opportunity to complete internships and explore pathways for medical licensing in Armenia and abroad.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D90012] rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F2A800] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}

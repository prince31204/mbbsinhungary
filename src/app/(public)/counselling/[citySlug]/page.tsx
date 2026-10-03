import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle,
  GraduationCap,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { buildMetadata, APP_YEAR } from "@/lib/seo";

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  return buildMetadata({
    title: `MBBS in Hungary Counselling in ${city} | Admission Help ${APP_YEAR}`,
    description: `Looking for MBBS in Hungary admission from ${city}? Get expert counselling, university selection, and visa assistance for Indian students in ${city}.`,
    path: `/counselling/${citySlug}`,
  });
}

export default async function CityCounsellingPage({ params }: PageProps) {
  const { citySlug } = await params;
  const city = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white text-[#202D28] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F3F7F3] px-4 py-2 rounded-full text-[#5F6F67] text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> Leading MBBS Consultants in {city}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MBBS in Hungary Admission Support for Students in {city}
            </h1>
            <p className="text-xl text-[#5F6F67] mb-10 leading-relaxed">
              Join 200+ students from {city} who have successfully secured
              admission in top NMC-approved medical universities in Hungary. Get
              end-to-end support from documentation to arrival.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-[#202D28] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-xl"
              >
                Book Free Appointment in {city}
              </Link>
              <Link
                href="/universities"
                className="bg-[#A52B3A]/30 border border-[#DDE5DD] px-8 py-4 rounded-xl font-bold hover:bg-[#F3F7F3] transition-all"
              >
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#202D28] mb-8">
                Why Choose Our {city} Counselling Center?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Direct University Tie-ups",
                    desc: "We represent Hungary's top government medical colleges directly.",
                  },
                  {
                    title: "Personalized Roadmap",
                    desc: "Guidance based on your NEET score, budget, and career preferences.",
                  },
                  {
                    title: "Full Documentation Support",
                    desc: "Apostille, translation, and visa invitation handling from {city}.",
                  },
                  {
                    title: "Education Loan Guidance",
                    desc: "Assistance with bank documentation for medical education loans.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="text-[#A52B3A] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#202D28] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#5F6F67] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#FBF8F0] p-8 rounded-3xl border border-[#DDE5DD]">
                <div className="text-4xl font-bold text-[#A52B3A] mb-2">10+</div>
                <div className="text-[#5F6F67] font-medium">Years in {city}</div>
              </div>
              <div className="bg-[#FBF8F0] p-8 rounded-3xl border border-[#DDE5DD]">
                <div className="text-4xl font-bold text-[#A52B3A] mb-2">
                  500+
                </div>
                <div className="text-[#5F6F67] font-medium">{city} Students</div>
              </div>
              <div className="col-span-2 bg-white p-8 rounded-3xl border border-[#DDE5DD]">
                <h3 className="font-bold text-[#202D28] mb-2 italic">
                  "The process from {city} was seamless. They handled everything
                  from my NEET check to my visa."
                </h3>
                <p className="text-[#175747] text-sm">
                  — Current 3rd Year Student from {city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Steps */}
      <section className="py-20 bg-[#FBF8F0]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">
            3 Simple Steps to Start from {city}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#A52B3A] border border-[#DDE5DD] italic">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Initial Consultation</h3>
              <p className="text-[#5F6F67] text-sm">
                Visit our locally or join a Zoom call for 1-on-1 guidance.
              </p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#A52B3A] border border-[#DDE5DD] italic">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Document Submission</h3>
              <p className="text-[#5F6F67] text-sm">
                Send your marks & NEET results for university pre-vetting.
              </p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#A52B3A] border border-[#DDE5DD] italic">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Fly to Hungary</h3>
              <p className="text-[#5F6F67] text-sm">
                Group departures from airports near {city} with our
                representatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-[3rem] p-12 text-[#202D28] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A52B3A]/20 rounded-full hidden -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Start Your Admission from {city} Today
            </h2>
            <p className="text-[#7A877F] mb-10 text-lg relative z-10">
              Limited intakes for {APP_YEAR} session. Secure your MBBS seat at
              the lowest fee package now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/contact-us"
                className="bg-[#A52B3A] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#8C2030] transition-all shadow-lg"
              >
                Get Call Back
              </Link>
              <Link
                href="tel:+919876543210"
                className="border-2 border-[#DDE5DD] text-[#202D28] px-10 py-5 rounded-2xl font-bold hover:bg-[#F3F7F3] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Speak to Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

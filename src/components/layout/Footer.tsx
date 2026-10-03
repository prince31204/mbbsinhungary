import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

const quickLinks = [
  { name: "Universities", path: "/universities" },
  { name: "About Hungary", path: "/about-Hungary" },
  { name: "Compare Universities", path: "/compare" },
  { name: "Education System", path: "/education-system" },
  { name: "Contact Us", path: "/contact-us" },
];

const services = [
  { name: "Admission Assistance", href: "/apply" },
  { name: "Application Guide", href: "/apply" },
  { name: "Visa Support", href: "/contact-us" },
  { name: "Accommodation Help", href: "/contact-us" },
  { name: "Career Guidance", href: "/contact-us" },
];

const resources = [
  { name: "Application Guide", href: "/apply" },
  { name: "Scholarship Guide", href: "/scholarships" },
  { name: "Country Information", href: "/about-Hungary" },
  { name: "FMGE Pass Rates", href: "/fmge-rates" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

export default async function Footer() {
  // Fetch top 5 universities
  const topUnis = await prisma.university
    .findMany({
      where: { status: true },
      select: { name: true, slug: true },
      take: 5,
      orderBy: { isFeatured: "desc" },
    })
    .catch(() => []);

  const universities = [
    ...topUnis.map((u) => ({ name: u.name, href: `/universities/${u.slug}` })),
    { name: "View All Universities", href: "/universities" },
  ];

  return (
    <footer className="bg-[#103D32] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#A52B3A] rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MBBS in Hungary</h3>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D5AE67] flex-shrink-0" />
                <span className="text-[#7A877F] text-sm">+91 9667 667 331</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D5AE67] flex-shrink-0" />
                <span className="text-[#7A877F] text-sm">
                  info@mbbsinhungary.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D5AE67] flex-shrink-0 mt-0.5" />
                <span className="text-[#7A877F] text-sm">
                  B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram,
                  Haryana 122018
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Facebook,
                    href: "https://facebook.com/mbbsinHungary",
                    label: "Facebook",
                  },
                  {
                    Icon: Twitter,
                    href: "https://twitter.com/mbbsinHungary",
                    label: "Twitter",
                  },
                  {
                    Icon: Instagram,
                    href: "https://instagram.com/mbbsinHungary",
                    label: "Instagram",
                  },
                  {
                    Icon: Youtube,
                    href: "https://youtube.com/@mbbsinHungary",
                    label: "YouTube",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#175747] text-white rounded-full flex items-center justify-center hover:bg-[#A52B3A] hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Top Universities</h4>
            <ul className="space-y-3">
              {universities.map((u, index) => (
                <li key={index}>
                  <Link
                    href={u.href}
                    className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors text-sm"
                  >
                    {u.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors text-sm"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.name}>
                  <Link
                    href={r.href}
                    className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors text-sm"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#7A877F] text-sm">
              © {new Date().getFullYear()} MBBS in Hungary | Partner of Embassy
              of Hungary
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[#DDE5DD] hover:text-[#D5AE67] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

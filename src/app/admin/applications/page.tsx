"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ClipboardList,
  Search,
  Eye,
  X,
  RefreshCw,
  Download,
} from "lucide-react";
import { format } from "date-fns";

type Application = {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  gender: string | null;
  country: string | null;
  city: string | null;
  state: string | null;
  fatherName: string | null;
  motherName: string | null;
  dateOfBirth: string | null;
  highestLevelOfEducation: string | null;
  gradeAverage: string | null;
  neetScore: number | null;
  interestedUniversity: string | null;
  interestedProgram: string | null;
  leadStatus: string | null;
  createdAt: string;
};

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Application | null>(null);

  const pageSize = 20;

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
        search,
      });
      const res = await fetch(`/api/applications?${params}`);
      const data = await res.json();
      setApps(data.data ?? []);
      setTotal(data.total ?? 0);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    load();
  }, [load]);

  const totalPages = Math.ceil(total / pageSize);

  const badge = (status: string | null) => {
    const map: Record<string, string> = {
      new: "bg-[#F3F7F3] text-[#103D32]",
      reviewed: "bg-red-400 text-[#A52B3A]",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-[#175747] text-[#A52B3A]",
    };
    return (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${map[status ?? "new"] ?? "bg-[#F3F7F3] text-[#5F6F67]"}`}
      >
        {status ?? "new"}
      </span>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#175747] p-2 rounded-lg">
            <ClipboardList size={20} className="text-[#A52B3A]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#202D28]">Applications</h1>
            <p className="text-sm text-[#7A877F]">
              {total} total submissions from /apply page
            </p>
          </div>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 text-sm text-[#5F6F67] hover:text-[#202D28] border border-[#DDE5DD] px-3 py-2 rounded-lg hover:bg-[#FBF8F0] transition"
        >
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search
          size={15}
          className="absolute left-3 top-3 text-[#7A877F] pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search name, email, phone…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full pl-9 pr-4 py-2.5 border border-[#DDE5DD] rounded-xl text-sm focus:ring-2 focus:ring-[#175747]/500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#DDE5DD] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#FBF8F0] border-b border-[#DDE5DD]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  #
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  Applicant
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  University
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  NEET
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  Submitted
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#7A877F] uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-10 text-center text-[#7A877F]"
                  >
                    Loading…
                  </td>
                </tr>
              ) : apps.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-10 text-center text-[#7A877F]"
                  >
                    No applications found.
                  </td>
                </tr>
              ) : (
                apps.map((app, i) => (
                  <tr
                    key={app.id}
                    className="hover:bg-[#FBF8F0] transition-colors"
                  >
                    <td className="px-4 py-3 text-[#7A877F] text-xs">
                      {(page - 1) * pageSize + i + 1}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#202D28]">{app.name}</p>
                      <p className="text-xs text-[#7A877F]">
                        {app.gender} {app.country ? `· ${app.country}` : ""}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-[#5F6F67]">{app.email}</p>
                      <p className="text-xs text-[#7A877F]">{app.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-[#5F6F67] text-xs max-w-[160px] truncate">
                      {app.interestedUniversity ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-[#5F6F67]">
                      {app.neetScore ?? "—"}
                    </td>
                    <td className="px-4 py-3">{badge(app.leadStatus)}</td>
                    <td className="px-4 py-3 text-[#7A877F] text-xs whitespace-nowrap">
                      {format(new Date(app.createdAt), "dd MMM yyyy")}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelected(app)}
                        className="flex items-center gap-1 text-xs text-[#A52B3A] hover:text-[#175747] font-medium"
                      >
                        <Eye size={13} /> View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-gray-50 flex items-center justify-between text-sm text-[#5F6F67]">
            <span>
              Page {page} of {totalPages}
            </span>
            <div className="flex gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1.5 border border-[#DDE5DD] rounded-lg disabled:opacity-40 hover:bg-[#FBF8F0] transition text-xs"
              >
                ← Prev
              </button>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1.5 border border-[#DDE5DD] rounded-lg disabled:opacity-40 hover:bg-[#FBF8F0] transition text-xs"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-white/50 z-50 flex items-start justify-end p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mt-10">
            <div className="flex items-center justify-between p-5 border-b border-[#DDE5DD]">
              <h2 className="font-bold text-[#202D28]">Application Detail</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-[#7A877F] hover:text-[#5F6F67]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-5 space-y-4 text-sm">
              <Section title="Personal">
                <Row label="Name" value={selected.name} />
                <Row label="Email" value={selected.email} />
                <Row label="Phone" value={selected.phone} />
                <Row label="Gender" value={selected.gender} />
                <Row
                  label="Date of Birth"
                  value={
                    selected.dateOfBirth
                      ? format(new Date(selected.dateOfBirth), "dd MMM yyyy")
                      : null
                  }
                />
              </Section>
              <Section title="Family">
                <Row label="Father's Name" value={selected.fatherName} />
                <Row label="Mother's Name" value={selected.motherName} />
              </Section>
              <Section title="Location">
                <Row label="City" value={selected.city} />
                <Row label="State" value={selected.state} />
                <Row label="Country" value={selected.country} />
              </Section>
              <Section title="Academic">
                <Row
                  label="Education Level"
                  value={selected.highestLevelOfEducation}
                />
                <Row label="Percentage / CGPA" value={selected.gradeAverage} />
                <Row
                  label="NEET Score"
                  value={selected.neetScore?.toString()}
                />
                <Row
                  label="Interested University"
                  value={selected.interestedUniversity}
                />
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold text-[#7A877F] uppercase tracking-wide mb-2">
        {title}
      </p>
      <div className="bg-[#FBF8F0] rounded-xl p-3 space-y-2">{children}</div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[#7A877F] shrink-0">{label}</span>
      <span className="text-[#202D28] font-medium text-right">{value}</span>
    </div>
  );
}

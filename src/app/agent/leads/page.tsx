"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Users,
  Loader2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Inquiry = {
  id: number;
  status: string | null;
  universityName: string | null;
  message: string | null;
  source: string | null;
  createdAt: string;
  lead: { name: string; email: string; phone: string | null };
};

const statusColors: Record<string, string> = {
  pending: "bg-red-400 text-[#A52B3A]",
  contacted: "bg-[#F3F7F3] text-[#175747]",
  enrolled: "bg-green-100 text-green-700",
  rejected: "bg-[#F3F7F3] text-[#175747]",
};

export default function AgentLeadsPage() {
  const [data, setData] = useState<Inquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (p: number) => {
    setLoading(true);
    const res = await fetch(`/api/agent/leads?page=${p}`);
    if (res.ok) {
      const j = await res.json();
      setData(j.data);
      setTotal(j.total);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load(page);
  }, [load, page]);

  const filtered = query
    ? data.filter(
        (i) =>
          i.lead.name.toLowerCase().includes(query.toLowerCase()) ||
          (i.lead.email ?? "").toLowerCase().includes(query.toLowerCase()),
      )
    : data;

  const pages = Math.ceil(total / 20);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#202D28]">My Leads</h1>
          <p className="text-[#7A877F] mt-1 text-sm">{total} total referrals</p>
        </div>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-3 text-[#7A877F]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by name or email…"
            className="pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#175747]/500 w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#DDE5DD] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <Loader2 size={20} className="animate-spin mx-auto text-[#7A877F]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <Users size={32} className="mx-auto mb-2 text-[#5F6F67]" />
            <p className="text-[#7A877F]">No leads found.</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-[#FBF8F0] text-[#5F6F67] text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">Student</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">University</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((inq) => (
                <tr key={inq.id} className="hover:bg-[#FBF8F0]">
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#202D28]">{inq.lead.name}</p>
                    <p className="text-xs text-[#7A877F]">{inq.lead.email}</p>
                  </td>
                  <td className="px-4 py-3 text-[#5F6F67]">
                    {inq.lead.phone ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-[#5F6F67]">
                    {inq.universityName ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-[#7A877F]">
                    {inq.source ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[inq.status ?? "pending"] ?? "bg-[#F3F7F3] text-[#5F6F67]"}`}
                    >
                      {inq.status ?? "pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#7A877F] text-xs">
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded-lg border disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm text-[#5F6F67]">
            Page {page} of {pages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className="p-2 rounded-lg border disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

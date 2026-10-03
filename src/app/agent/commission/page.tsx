import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { CURRENCY_SYMBOL, formatCurrencyNumber } from "@/lib/currency";

export default async function AgentCommissionPage() {
  const session = await auth();
  const agentId = Number(session?.user?.id);

  const [enrolled, total] = await Promise.all([
    prisma.leadInquiry.count({ where: { agentId, status: "enrolled" } }),
    prisma.leadInquiry.count({ where: { agentId } }),
  ]);

  // Commission calculation: currency-configured amount per enrolled student (configurable in future)
  const COMMISSION_PER_STUDENT = 500;
  const totalEarned = enrolled * COMMISSION_PER_STUDENT;

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-[#202D28]">Commission</h1>
        <p className="text-[#7A877F] text-sm mt-1">
          Track your earnings from enrolled students
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-[#DDE5DD] p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
              <DollarSign size={18} className="text-green-600" />
            </div>
            <p className="text-[#7A877F] text-sm">Total Earned</p>
          </div>
          <p className="text-3xl font-bold text-[#202D28]">
            {formatCurrencyNumber(totalEarned)}
          </p>
          <p className="text-xs text-[#7A877F] mt-1">{`${CURRENCY_SYMBOL}${COMMISSION_PER_STUDENT} per enrolled student`}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#DDE5DD] p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-[#F3F7F3] flex items-center justify-center">
              <TrendingUp size={18} className="text-[#A52B3A]" />
            </div>
            <p className="text-[#7A877F] text-sm">Conversion Rate</p>
          </div>
          <p className="text-3xl font-bold text-[#202D28]">
            {total ? Math.round((enrolled / total) * 100) : 0}%
          </p>
          <p className="text-xs text-[#7A877F] mt-1">
            {enrolled} of {total} leads enrolled
          </p>
        </div>
      </div>

      {/* Status breakdown */}
      <div className="bg-white rounded-xl border border-[#DDE5DD] p-6 space-y-4">
        <h2 className="font-semibold text-[#202D28]">Referral Breakdown</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-50">
            <div className="flex items-center gap-2 text-[#5F6F67]">
              <CheckCircle size={16} className="text-green-500" />
              <span className="text-sm">Enrolled Students</span>
            </div>
            <span className="font-semibold text-green-600">{enrolled}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-50">
            <div className="flex items-center gap-2 text-[#5F6F67]">
              <Clock size={16} className="text-[#A52B3A]" />
              <span className="text-sm">Total Referrals</span>
            </div>
            <span className="font-semibold">{total}</span>
          </div>
        </div>
        <div className="bg-red-400 border border-[#DDE5DD] rounded-xl p-4 text-sm text-[#A52B3A] mt-4">
          <strong>Note:</strong> Commission is counted when a student&apos;s
          status is marked as &quot;Enrolled&quot; by the admin team. Contact us
          at support@mbbsinhungary.com for payout requests.
        </div>
      </div>
    </div>
  );
}

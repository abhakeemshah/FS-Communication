import { AdminShell } from '../../../components/admin-shell';
import { DashboardMetricsEditor } from '../../../components/dashboard-metrics-editor';

export default function AdminDashboardPage() {
  return (
    <AdminShell active="dashboard" title="Dashboard">
      <DashboardMetricsEditor />

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Recent Invoices</h2>
            <p className="text-xs text-slate-500">Real-time settlement activity and pending actions</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity" type="button">
            Export Records
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-['Inter']">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 text-[10px] font-bold text-blue-700 uppercase tracking-widest">Reference ID</th>
                <th className="px-4 py-3 text-[10px] font-bold text-blue-700 uppercase tracking-widest">Party / Client</th>
                <th className="px-4 py-3 text-[10px] font-bold text-blue-700 uppercase tracking-widest">Date</th>
                <th className="px-4 py-3 text-[10px] font-bold text-blue-700 uppercase tracking-widest">Amount</th>
                <th className="px-4 py-3 text-[10px] font-bold text-blue-700 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-4 py-3 text-xs font-bold text-blue-900">#FSC-92841</td>
                <td className="px-4 py-3 text-xs text-slate-700">Apex Media Global</td>
                <td className="px-4 py-3 text-xs text-slate-500">Oct 24, 2023</td>
                <td className="px-4 py-3 text-xs font-bold text-slate-700">1,450.00</td>
                <td className="px-4 py-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-tighter">
                    Settled
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-4 py-3 text-xs font-bold text-blue-900">#FSC-92842</td>
                <td className="px-4 py-3 text-xs text-slate-700">Swift Connect Corp</td>
                <td className="px-4 py-3 text-xs text-slate-500">Oct 24, 2023</td>
                <td className="px-4 py-3 text-xs font-bold text-slate-700">4,200.00</td>
                <td className="px-4 py-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-500 text-white uppercase tracking-tighter">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}

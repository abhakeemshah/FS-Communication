import { AdminShell } from '../../../../components/admin-shell';

export default function AdminReportsPage() {
  return (
    <AdminShell active="reports" title="Reports">
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-bold text-white">Reports Center</h2>
          <p className="text-xs text-blue-100">Generate daily, weekly, and monthly business reports.</p>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700" type="button">Daily Sales Report</button>
          <button className="rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700" type="button">Profit Summary</button>
          <button className="rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700" type="button">Receivables Aging</button>
        </div>
      </section>
    </AdminShell>
  );
}

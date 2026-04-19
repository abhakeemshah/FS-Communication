import { AdminShell } from '../../../../components/admin-shell';

export default function AdminPaymentsPage() {
  return (
    <AdminShell active="payments" title="Payments">
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-bold text-white">Payments Ledger</h2>
          <p className="text-xs text-blue-100">Monitor outgoing and incoming payment activity.</p>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3 flex items-center justify-between">
            <span className="text-xs text-slate-600">Incoming Today</span>
            <strong className="text-sm text-blue-700">$12,940</strong>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 flex items-center justify-between">
            <span className="text-xs text-slate-600">Outgoing Today</span>
            <strong className="text-sm text-blue-700">$7,610</strong>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

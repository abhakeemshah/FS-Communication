import { AdminShell } from '../../../../components/admin-shell';

export default function AdminPurchasesPage() {
  return (
    <AdminShell active="purchases" title="Purchases">
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-bold text-white">Purchase Orders</h2>
          <p className="text-xs text-blue-100">Track supplier orders, costs, and due dates.</p>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">Open Orders</p>
            <p className="text-lg font-extrabold text-slate-900">18</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">Pending Approval</p>
            <p className="text-lg font-extrabold text-slate-900">5</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">Completed This Week</p>
            <p className="text-lg font-extrabold text-slate-900">9</p>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

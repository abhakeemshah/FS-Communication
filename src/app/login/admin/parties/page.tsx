import { AdminShell } from '../../../../components/admin-shell';

export default function AdminPartiesPage() {
  return (
    <AdminShell active="parties" title="Parties">
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-bold text-white">Customers and Suppliers</h2>
          <p className="text-xs text-blue-100">Manage party records and account summaries.</p>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">Active Customers</p>
            <p className="text-lg font-extrabold text-slate-900">236</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">Active Suppliers</p>
            <p className="text-lg font-extrabold text-slate-900">42</p>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

import Link from 'next/link';
import { AdminShell } from '../../../../components/admin-shell';

export default function AdminSettingsPage() {
  return (
    <AdminShell active="settings" title="Settings">
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-bold text-white">Access and Permissions</h2>
          <p className="text-xs text-blue-100">Configure team permissions and account controls.</p>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-600 mb-2">Staff Access Management</p>
            <Link href="/login/staff" className="inline-flex px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold">
              Open Staff Management
            </Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            Feature permissions can be assigned as no access, view-only, edit, or full access.
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

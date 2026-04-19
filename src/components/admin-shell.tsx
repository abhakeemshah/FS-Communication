import type { ReactNode } from 'react';
import Link from 'next/link';

type AdminSection = 'dashboard' | 'sales' | 'purchases' | 'payments' | 'parties' | 'reports' | 'settings';

const navItems: Array<{ key: AdminSection; label: string; icon: string; href: string }> = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/login/admin' },
  { key: 'sales', label: 'Sales', icon: 'payments', href: '/sales/invoices' },
  { key: 'purchases', label: 'Purchases', icon: 'shopping_cart', href: '/login/admin/purchases' },
  { key: 'payments', label: 'Payments', icon: 'account_balance_wallet', href: '/login/admin/payments' },
  { key: 'parties', label: 'Parties', icon: 'groups', href: '/login/admin/parties' },
  { key: 'reports', label: 'Reports', icon: 'analytics', href: '/login/admin/reports' },
  { key: 'settings', label: 'Settings', icon: 'settings', href: '/login/admin/settings' },
];

export function AdminShell({
  children,
  active,
  title,
}: {
  children: ReactNode;
  active: AdminSection;
  title: string;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="h-screen w-56 fixed left-0 top-0 bg-white flex flex-col border-r border-slate-200 p-3 text-xs shadow-[0_6px_24px_rgba(15,23,42,0.06)]">
        <div className="mb-8 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50">
          <h2 className="font-['Manrope'] font-black text-slate-900 text-xl tracking-tighter">Admin Panel</h2>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Precision Curator Control</p>
        </div>

        <nav className="flex-1 space-y-1" aria-label="Admin Sidebar">
          {navItems.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={
                  isActive
                    ? 'bg-blue-50 text-blue-800 rounded-lg shadow-sm border border-blue-200 font-bold px-3 py-2 mb-1.5 flex items-center gap-2 transition-all duration-200'
                    : 'text-slate-600 px-3 py-2 mb-1.5 flex items-center gap-2 hover:bg-slate-100 hover:border hover:border-slate-200 rounded-lg transition-all duration-200'
                }
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="ml-56 flex-1 flex flex-col min-h-screen">
        <header className="top-0 sticky z-40 bg-white flex justify-between items-center px-5 py-2.5 w-full border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-slate-900">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:bg-blue-50 rounded-full p-1.5 border border-slate-200 transition-all duration-150" type="button">
              <span className="material-symbols-outlined text-[18px] text-slate-600">notifications</span>
            </button>
            <button className="hover:bg-blue-50 rounded-full p-1.5 border border-slate-200 transition-all duration-150" type="button">
              <span className="material-symbols-outlined text-[18px] text-slate-600">help</span>
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6 max-w-[1500px] mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}

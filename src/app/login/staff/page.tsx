export default function StaffManagementPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <aside className="h-screen w-56 fixed left-0 top-0 bg-white flex flex-col border-r border-slate-200 p-3 z-50 text-xs shadow-[0_6px_24px_rgba(15,23,42,0.06)]">
        <div className="mb-8 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="font-['Manrope'] font-black text-slate-900 text-xl tracking-tighter">FS Admin</span>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">Precision Curator Control</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center text-slate-600 hover:bg-slate-100 px-3 py-2 mb-1.5 transition-all duration-300 ease-in-out font-['Inter'] text-xs font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined text-[18px] mr-2">payments</span>Sales
          </a>
          <a className="flex items-center bg-blue-50 text-blue-800 rounded-lg shadow-sm border border-blue-200 font-bold px-3 py-2 mb-1.5 transition-all duration-300 ease-in-out font-['Inter'] text-xs" href="#">
            <span className="material-symbols-outlined text-[18px] mr-2">settings</span>Settings
          </a>
        </nav>
      </aside>

      <main className="ml-56 min-h-screen relative">
        <header className="flex justify-between items-center px-6 py-3 w-full bg-white sticky top-0 z-40 border-b border-blue-200">
          <div className="flex items-center gap-4">
            <h1 className="font-['Manrope'] font-extrabold text-blue-900 text-lg tracking-tight">Staff Accounts</h1>
            <div className="h-4 w-px bg-blue-300" />
            <nav className="flex gap-4">
              <span className="text-blue-700 font-bold font-['Manrope'] text-xs cursor-pointer">Permissions</span>
              <span className="text-blue-400 font-['Manrope'] text-xs hover:text-blue-700 cursor-pointer transition-colors">Access Logs</span>
            </nav>
          </div>
        </header>

        <div className="p-7 space-y-8 max-w-7xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-3xl font-extrabold text-on-background tracking-tight leading-none">Manage Team Authority</h2>
              <p className="text-on-surface-variant max-w-xl text-base font-medium leading-relaxed">
                Precision-control feature access for every team member. High-fidelity permission sets ensure operational
                security across your ecosystem.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-lg flex items-center gap-2 shadow-xl shadow-indigo-900/10 hover:shadow-indigo-900/20 transition-all font-bold text-xs tracking-wide">
                <span className="material-symbols-outlined text-base">person_add</span>
                Provision New Member
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden border border-blue-200 shadow-sm">
              <div className="px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 border-b border-blue-200">
                <h4 className="font-bold text-base text-white">Current Staff Records</h4>
                <div className="flex bg-white px-2.5 py-1.5 rounded-lg gap-2 items-center border border-blue-200">
                  <span className="material-symbols-outlined text-[18px] text-blue-400">search</span>
                  <input className="bg-transparent border-none focus:ring-0 text-xs w-40 text-slate-700 placeholder-blue-300" placeholder="Filter by name..." type="text" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-blue-50 text-blue-700 text-[10px] uppercase font-black tracking-[0.2em]">
                    <tr>
                      <th className="px-6 py-3">Member</th>
                      <th className="px-6 py-3">Module Access</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    <tr className="hover:bg-blue-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">Alex Lefebvre</p>
                        <p className="text-xs text-slate-500">alex.l@fs-comms.com</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-600 px-2 py-1 rounded border border-blue-300 text-[10px] font-bold text-white uppercase">Sales: Full</span>
                          <span className="bg-sky-500 px-2 py-1 rounded border border-sky-300 text-[10px] font-bold text-white uppercase">Reports: View</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 border border-slate-200">
                <h4 className="font-['Manrope'] font-extrabold text-lg text-blue-900">Provision Access</h4>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500">Target Identity</label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-blue-300 transition-all appearance-none">
                    <option>Select Member...</option>
                    <option>Alex Lefebvre</option>
                    <option>Sarah Jenkins</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:opacity-95 transition-colors" type="button">
                  Update Authorization
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

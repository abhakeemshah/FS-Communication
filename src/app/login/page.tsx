import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <header className="bg-white/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-xl shadow-indigo-900/5">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="text-lg font-extrabold text-indigo-900 tracking-tight font-['Manrope']">FS Communication</div>
          <div className="hidden md:flex gap-6 text-sm">
            <Link className="text-indigo-900 border-b-2 border-indigo-700 pb-1 font-['Manrope'] font-bold tracking-tight" href="/">
              Home
            </Link>
            <a className="text-slate-600 hover:text-indigo-700 transition-colors font-['Manrope'] font-bold tracking-tight" href="#">
              Products
            </a>
            <a className="text-slate-600 hover:text-indigo-700 transition-colors font-['Manrope'] font-bold tracking-tight" href="#">
              Support
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-surface text-on-surface">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-on-tertiary-container/5 rounded-full blur-[80px]" />

        <div className="w-full max-w-sm relative mt-14">
          <div className="surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(19,27,46,0.06)] overflow-hidden border border-white/20 bg-white/70 backdrop-blur-2xl">
            <div className="px-7 pt-8 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-4 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-on-primary text-xl">lock_open</span>
              </div>
              <h1 className="text-2xl font-extrabold text-on-surface tracking-tight mb-1.5">Welcome Back</h1>
              <p className="text-sm text-on-surface-variant font-medium">Access the curator control center</p>
            </div>

            <form className="px-7 pb-8 space-y-5">
              <div className="space-y-2.5">
                <label className="text-xs font-semibold tracking-wide text-on-surface-variant uppercase font-['Inter']">Select Your Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <Link className="group flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-highest border-2 border-primary text-primary transition-all duration-300" href="/login/staff">
                    <span className="material-symbols-outlined text-lg">badge</span>
                    <span className="text-sm font-bold tracking-tight">Staff</span>
                  </Link>
                  <Link className="group flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all duration-300" href="/login/admin">
                    <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                    <span className="text-sm font-bold tracking-tight">Admin</span>
                  </Link>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold tracking-wide text-on-surface-variant uppercase font-['Inter']" htmlFor="id">
                    Username or Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-[18px] text-outline group-focus-within:text-primary transition-colors">alternate_email</span>
                    </div>
                    <input className="w-full pl-10 pr-3 py-3 bg-surface-container-highest rounded-lg border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-sm font-medium placeholder:text-outline" id="id" placeholder="curator@fscomms.io" type="text" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold tracking-wide text-on-surface-variant uppercase font-['Inter']" htmlFor="password">
                      Password
                    </label>
                    <a className="text-xs font-bold text-primary hover:underline" href="#">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-[18px] text-outline group-focus-within:text-primary transition-colors">key</span>
                    </div>
                    <input className="w-full pl-10 pr-3 py-3 bg-surface-container-highest rounded-lg border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-sm font-medium placeholder:text-outline" id="password" placeholder="••••••••••••" type="password" />
                  </div>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5" type="submit">
                Sign In
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>

              <p className="text-center text-xs text-on-surface-variant pt-2">
                Don't have an account?{' '}
                <a className="text-primary font-bold hover:underline" href="#">
                  Contact System Admin
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

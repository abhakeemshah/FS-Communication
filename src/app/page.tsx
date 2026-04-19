import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <header className="docked full-width top-0 sticky z-50 bg-white/70 backdrop-blur-xl shadow-xl shadow-indigo-900/5">
        <nav className="flex justify-between items-center px-6 py-3 w-full max-w-7xl mx-auto font-['Manrope'] font-bold tracking-tight">
          <div className="text-lg font-extrabold text-indigo-900">FS Communication</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-indigo-700 border-b-2 border-indigo-700 pb-1 transition-colors" href="#">
              Home
            </a>
            <a className="text-slate-600 hover:text-indigo-700 transition-colors" href="#products">
              Products
            </a>
            <a className="text-slate-600 hover:text-indigo-700 transition-colors" href="#support">
              Support
            </a>
            <a className="text-slate-600 hover:text-indigo-700 transition-colors" href="#about">
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-slate-600 text-[20px] hover:bg-slate-50 p-1.5 rounded-full transition-all">
              search
            </button>
            <Link className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-sm font-bold scale-95 hover:scale-100 duration-200" href="/login">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[680px] flex items-center overflow-hidden px-6">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 z-10">
              <span className="inline-block bg-surface-container-highest text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
                NEW COLLECTION 2026
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface leading-[1.05] tracking-tighter mb-6">
                Precision in <br />
                <span className="text-primary italic">Every Pixel.</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed mb-7 font-body">
                Discover the intersection of high-end aesthetics and cutting-edge performance. Our curated tech gallery
                for the modern professional.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all flex items-center gap-1.5"
                  href="#products"
                >
                  Explore Catalog
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <a className="bg-surface-container-high text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-surface-container-highest transition-all" href="#products">
                  View Lookbook
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-full min-h-[420px]">
              <div className="absolute inset-0 bg-surface-container-low rounded-[4rem] transform rotate-3" />
              <img
                alt="Premium Laptop"
                className="relative z-10 w-full h-full object-cover rounded-[3.5rem] shadow-[0_20px_40px_rgba(19,27,46,0.08)] transform -rotate-1"
                src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-surface" id="products">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight">Curated Essentials</h2>
                <p className="text-on-surface-variant mt-1.5 text-sm font-body">Defining the workspace of tomorrow.</p>
              </div>
              <a className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                View All Categories <span className="material-symbols-outlined text-[18px]">trending_flat</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['COMPUTING', 'FS EliteBook X1', '$1,499.00', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'],
                ['AUDIO', 'SonicFlow Studio', '$299.00', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80'],
                ['WEARABLES', 'FS Meridian V2', '$349.00', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80'],
                ['ACCESSORIES', 'Tactile Pro K1', '$189.00', 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80'],
              ].map((item) => (
                <div className="group" key={item[1]}>
                  <div className="bg-surface-container-lowest rounded-[1.5rem] p-3 shadow-[0_20px_40px_rgba(19,27,46,0.06)] transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="aspect-square bg-surface-container rounded-xl overflow-hidden mb-4">
                      <img alt={item[1]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item[3]} />
                    </div>
                    <div className="px-2 pb-2">
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item[0]}</p>
                      <h3 className="font-headline font-bold text-base mb-1.5">{item[1]}</h3>
                      <div className="flex justify-between items-center mt-2.5">
                        <p className="font-headline text-lg font-extrabold text-on-surface">{item[2]}</p>
                        <button className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                          <span className="material-symbols-outlined text-xs">shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container py-10 px-6" id="about">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant font-medium">
          <p>© 2026 FS Communication. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

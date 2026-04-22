 'use client';

import { useAdminShellLayout } from './admin-shell';

const invoiceMonths = ['May 2025', 'Aug 2025', 'Nov 2025', 'Feb 2026', 'Apr 2026'];
const invoiceValues = [12, 18, 15, 29, 42];

const salesMonths = ['May 2025', 'Aug 2025', 'Nov 2025', 'Feb 2026', 'Apr 2026'];
const salesValues = [8, 14, 20, 27, 38];

function MiniBarChart({ values, barColor }: { values: number[]; barColor: string }) {
  const maxValue = Math.max(...values);

  return (
    <svg viewBox="0 0 320 120" className="h-28 w-full">
      <defs>
        <linearGradient id={`${barColor}-grid`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="120" rx="14" fill="transparent" />
      {[16, 38, 60, 82, 104].map((y) => (
        <line key={y} x1="38" y1={y} x2="308" y2={y} stroke="url(#invoice-grid)" strokeWidth="1" />
      ))}
      {values.map((value, index) => {
        const height = (value / maxValue) * 72;
        const x = 54 + index * 54;
        const y = 104 - height;
        return (
          <g key={`${value}-${index}`}>
            <rect x={x} y={y} width="28" height={height} rx="5" fill={barColor} opacity="0.72" />
          </g>
        );
      })}
      <line x1="38" y1="104" x2="308" y2="104" stroke="#cbd5e1" strokeWidth="1" />
    </svg>
  );
}

function ChartCard({
  title,
  value,
  label,
  buttonLabel,
  buttonTone,
  barColor,
  months,
  values,
  legend,
}: {
  title: string;
  value: string;
  label: string;
  buttonLabel: string;
  buttonTone: string;
  barColor: string;
  months: string[];
  values: number[];
  legend: Array<{ label: string; color: string }>;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <div className="mt-4 flex items-end gap-3">
            <div>
              <div className="text-xl font-black tracking-tight text-slate-900">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${buttonTone}`}
        >
          <span className="material-symbols-outlined text-[16px]">insert_chart</span>
          {buttonLabel}
        </button>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl bg-slate-50/80 p-2.5">
        <MiniBarChart values={values} barColor={barColor} />
        <div className="mt-1.5 flex flex-wrap items-center gap-3 pl-10 text-[10px] text-slate-500">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 text-xs">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-slate-600">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DashboardSummaryCharts() {
  const { isCollapsed } = useAdminShellLayout();

  return (
    <div className={`grid gap-3 ${isCollapsed ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 xl:grid-cols-2'}`}>
      <ChartCard
        title="Invoices Over Time"
        value="1"
        label="Recent Invoices"
        buttonLabel="View Report"
        buttonTone="border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
        barColor="#93c5fd"
        months={invoiceMonths}
        values={invoiceValues}
        legend={[{ label: 'Revenue', color: '#60a5fa' }]}
      />
      <ChartCard
        title="Sales"
        value="42,500.00"
        label="Monthly profit"
        buttonLabel="View Report"
        buttonTone="border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
        barColor="#86efac"
        months={salesMonths}
        values={salesValues}
        legend={[
          { label: 'Profit', color: '#22c55e' },
          { label: 'Loss', color: '#f87171' },
        ]}
      />
    </div>
  );
}
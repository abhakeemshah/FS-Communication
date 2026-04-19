'use client';

import { useMemo, useState } from 'react';

type MetricMood = 'positive' | 'negative' | 'neutral';

type Metric = {
  key: string;
  icon: string;
  label: string;
  value: string;
  tone: string;
  editable: boolean;
  mood: MetricMood;
};

const initialMetrics: Metric[] = [
  {
    key: 'cash-balance',
    icon: 'account_balance_wallet',
    label: 'Cash balance',
    value: '58,400',
    tone: 'from-white to-blue-50 border-blue-100',
    editable: true,
    mood: 'neutral',
  },
  {
    key: 'bank-balance',
    icon: 'account_balance',
    label: 'Bank balance',
    value: '84,100',
    tone: 'from-white to-sky-50 border-sky-100',
    editable: true,
    mood: 'neutral',
  },
  {
    key: 'total-receivables',
    icon: 'payments',
    label: 'Total receivables',
    value: '46,200',
    tone: 'from-white to-indigo-50 border-indigo-100',
    editable: false,
    mood: 'neutral',
  },
  {
    key: 'total-payables',
    icon: 'request_quote',
    label: 'Total payables',
    value: '28,450',
    tone: 'from-white to-slate-100 border-slate-200',
    editable: false,
    mood: 'negative',
  },
  {
    key: 'customer-advances',
    icon: 'person_add',
    label: 'Customer advances',
    value: '9,300',
    tone: 'from-white to-cyan-50 border-cyan-100',
    editable: false,
    mood: 'neutral',
  },
  {
    key: 'supplier-advances',
    icon: 'inventory_2',
    label: 'Supplier advances',
    value: '6,780',
    tone: 'from-white to-blue-50 border-blue-100',
    editable: false,
    mood: 'negative',
  },
  {
    key: 'today-sales',
    icon: 'sell',
    label: "Today's sales",
    value: '4,250',
    tone: 'from-white to-sky-50 border-sky-100',
    editable: false,
    mood: 'positive',
  },
  {
    key: 'today-expenses',
    icon: 'receipt_long',
    label: "Today's expenses",
    value: '1,120',
    tone: 'from-white to-indigo-50 border-indigo-100',
    editable: false,
    mood: 'negative',
  },
  {
    key: 'net-profit',
    icon: 'monitoring',
    label: 'Net profit',
    value: '118,530',
    tone: 'from-white to-blue-50 border-blue-100',
    editable: false,
    mood: 'positive',
  },
  {
    key: 'daily-profit',
    icon: 'trending_up',
    label: 'Daily profit',
    value: '3,130',
    tone: 'from-white to-sky-50 border-sky-100',
    editable: false,
    mood: 'positive',
  },
  {
    key: 'monthly-profit',
    icon: 'calendar_month',
    label: 'Monthly profit',
    value: '48,290',
    tone: 'from-white to-indigo-50 border-indigo-100',
    editable: false,
    mood: 'positive',
  },
  {
    key: 'recovery-today',
    icon: 'sync_alt',
    label: 'Recovery (today)',
    value: '2,940',
    tone: 'from-white to-slate-100 border-slate-200',
    editable: false,
    mood: 'positive',
  },
];

export function DashboardMetricsEditor() {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(initialMetrics.map((m) => [m.key, m.value]))
  );
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [confirmKey, setConfirmKey] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const metricsByKey = useMemo(
    () => Object.fromEntries(initialMetrics.map((m) => [m.key, m])),
    []
  );

  const openConfirm = (key: string) => {
    setConfirmKey(key);
  };

  const confirmSave = () => {
    if (!confirmKey) return;
    const metric = metricsByKey[confirmKey];
    setConfirmKey(null);
    setEditingKey(null);
    setToast(`${metric.label} saved`);
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {initialMetrics.map((metric) => {
          const value = values[metric.key] ?? '';
          const isEditing = editingKey === metric.key;

          return (
            <div
              key={metric.key}
              className={`group bg-gradient-to-br ${metric.tone} p-3 rounded-lg border flex flex-col justify-between shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_10px_24px_rgba(37,99,235,0.12)]`}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-blue-700">{metric.icon}</span>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{metric.label}</p>
              </div>

              {metric.editable ? (
                <div className="flex items-center gap-2">
                  <input
                    aria-label={metric.label}
                    value={value}
                    onChange={(e) => {
                      setEditingKey(metric.key);
                      setValues((prev) => ({ ...prev, [metric.key]: e.target.value }));
                    }}
                    onFocus={() => setEditingKey(metric.key)}
                    className="w-full appearance-none border-0 bg-transparent px-0 py-1.5 text-2xl font-extrabold font-['Manrope'] text-slate-900 outline-none ring-0 focus:outline-none focus:ring-0"
                    type="text"
                  />
                  {isEditing ? (
                    <button
                      type="button"
                      onClick={() => openConfirm(metric.key)}
                      className="shrink-0 rounded-md bg-blue-600 px-2.5 py-1.5 text-[11px] font-bold text-white hover:opacity-90"
                    >
                      Save
                    </button>
                  ) : null}
                </div>
              ) : (
                <h3
                  className={`text-2xl font-extrabold font-['Manrope'] ${
                    metric.mood === 'positive'
                      ? 'text-emerald-600'
                      : metric.mood === 'negative'
                        ? 'text-rose-600'
                        : 'text-slate-900'
                  }`}
                >
                  {value}
                </h3>
              )}
            </div>
          );
        })}
      </section>

      {confirmKey ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/25 px-4">
          <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
            <h4 className="text-sm font-bold text-slate-900">Confirm update</h4>
            <p className="mt-1 text-xs text-slate-600">Save changes to {metricsByKey[confirmKey].label}?</p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmKey(null)}
                className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600"
              >
                No
              </button>
              <button
                type="button"
                onClick={confirmSave}
                className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg">
          {toast}
        </div>
      ) : null}
    </>
  );
}

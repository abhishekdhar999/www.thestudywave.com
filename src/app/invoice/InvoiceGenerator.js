'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { lockInvoice } from './actions';
import './invoice.css';
import { IG_SRC, WEB_SRC } from './icons';

/* ---------- helpers ---------- */
let seq = 0;
const uid = () => `it${++seq}`;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const pad = (n) => String(n).padStart(2, '0');
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
const fmtDate = (s) => {
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
};
const money = (n) => {
  const v = Math.round((Number(n) || 0) * 100) / 100;
  return Number.isInteger(v) ? String(v) : v.toFixed(2);
};

const makeInitialState = () => ({
  invoiceNo: '0924',
  clientName: 'Ms. Jenny',
  phone: '+1 (786) 566-7041',
  code: 'AUD',
  codeFirst: '1',
  symbol: '$',
  brandName: 'The Study Wave',
  showBrand: true,
  showLogo: true,
  logo: null,
  logoOpacity: 14,
  showFooter: true,
  instagram: 'thestudywave',
  website: 'Thestudywave.com',
  contactPhone: '+917740064839',
  contactEmail: 'Mtariyal71@gmail.com',
  instaIcon: null,
  webIcon: null,
  label: 'Math class',
  rate: 10,
  hours: 1,
  bonus: 0,
  noteTag: 'SPECIAL OFFER',
  note: 'Get your 3 classes FREE per student referral!!',
  items: ['18', '21', '23', '25', '28', '30', '31'].map((d) => ({
    id: uid(),
    date: `2026-07-${d}`,
    desc: '',
    hours: 1,
    cost: 10,
    auto: true,
  })),
  view: { y: 2026, m: 6 }, // m is 0-indexed
});

export default function InvoiceGenerator({ fontClass = '' }) {
  const [state, setState] = useState(makeInitialState);

  const logoInput = useRef(null);
  const iconInput = useRef(null);
  const loadInput = useRef(null);
  const iconTarget = useRef(null);
  const stageRef = useRef(null);
  const scalerRef = useRef(null);

  const set = useCallback((key, value) => {
    setState((s) => ({ ...s, [key]: value }));
  }, []);

  const bind = (key) => ({
    value: state[key] ?? '',
    onChange: (e) => set(key, e.target.value),
  });
  const bindChk = (key) => ({
    type: 'checkbox',
    checked: !!state[key],
    onChange: (e) => set(key, e.target.checked),
  });

  /* ---------- derived ---------- */
  const descOf = (it) =>
    it.auto ? state.label + (it.date ? ' ' + fmtDate(it.date) : '') : it.desc;

  const sorted = state.items
    .slice()
    .sort((a, b) => (a.date || '9999').localeCompare(b.date || '9999'));

  const subtotal = state.items.reduce(
    (s, it) => s + (Number(it.hours) || 0) * (Number(it.cost) || 0),
    0
  );
  const total = Math.max(0, subtotal - (Number(state.bonus) || 0));

  const hasInsta = !!String(state.instagram).trim();
  const hasWeb = !!String(state.website).trim();
  const hasPhone = !!String(state.contactPhone).trim();
  const hasMail = !!String(state.contactEmail).trim();
  const showFoot =
    state.showFooter && (hasInsta || hasWeb || hasPhone || hasMail);
  const showBrand = state.showBrand && !!String(state.brandName).trim();
  const showWm = state.showLogo && !!state.logo;

  /* ---------- calendar ---------- */
  const { y, m } = state.view;
  const lead = (new Date(y, m, 1).getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const picked = new Set(state.items.filter((i) => i.date).map((i) => i.date));

  const shiftView = (n) => {
    const d = new Date(state.view.y, state.view.m + n, 1);
    set('view', { y: d.getFullYear(), m: d.getMonth() });
  };

  const toggleDate = (key) => {
    setState((s) => {
      const i = s.items.findIndex((it) => it.date === key);
      if (i > -1) {
        const items = s.items.slice();
        items.splice(i, 1);
        return { ...s, items };
      }
      return {
        ...s,
        items: [
          ...s.items,
          {
            id: uid(),
            date: key,
            desc: '',
            hours: Number(s.hours) || 1,
            cost: Number(s.rate) || 0,
            auto: true,
          },
        ],
      };
    });
  };

  const selectWeekday = (target) => {
    setState((s) => {
      const days = new Date(s.view.y, s.view.m + 1, 0).getDate();
      const have = new Set(s.items.filter((i) => i.date).map((i) => i.date));
      const added = [];
      for (let d = 1; d <= days; d++) {
        const dt = new Date(s.view.y, s.view.m, d);
        if (((dt.getDay() + 6) % 7) === target) {
          const key = iso(s.view.y, s.view.m, d);
          if (!have.has(key)) {
            added.push({
              id: uid(),
              date: key,
              desc: '',
              hours: Number(s.hours) || 1,
              cost: Number(s.rate) || 0,
              auto: true,
            });
          }
        }
      }
      return added.length ? { ...s, items: [...s.items, ...added] } : s;
    });
  };

  const clearMonth = () => {
    setState((s) => {
      const p = `${s.view.y}-${pad(s.view.m + 1)}`;
      return { ...s, items: s.items.filter((i) => !(i.date || '').startsWith(p)) };
    });
  };

  const addCustom = () => {
    setState((s) => ({
      ...s,
      items: [
        ...s.items,
        {
          id: uid(),
          date: null,
          desc: 'Extra session',
          hours: 1,
          cost: Number(s.rate) || 0,
          auto: false,
        },
      ],
    }));
  };

  const applyAll = () => {
    setState((s) => ({
      ...s,
      items: s.items.map((it) => ({
        ...it,
        hours: Number(s.hours) || 1,
        cost: Number(s.rate) || 0,
        auto: it.date ? true : it.auto,
      })),
    }));
  };

  const rollForward = () => {
    setState((s) => {
      const items = s.items.map((it) => {
        if (!it.date) return it;
        const [iy, im, id] = it.date.split('-').map(Number);
        const last = new Date(iy, im + 1, 0).getDate();
        const day = Math.min(id, last);
        const nd = new Date(iy, im, day); // im is already +1 in 0-index terms
        return { ...it, date: iso(nd.getFullYear(), nd.getMonth(), nd.getDate()) };
      });

      let invoiceNo = s.invoiceNo;
      const n = String(invoiceNo).match(/\d+$/);
      if (n) {
        const next = String(Number(n[0]) + 1).padStart(n[0].length, '0');
        invoiceNo = String(invoiceNo).slice(0, n.index) + next;
      }

      let view = s.view;
      const first = items
        .slice()
        .sort((a, b) => (a.date || '9999').localeCompare(b.date || '9999'))[0];
      if (first && first.date) {
        const [fy, fm] = first.date.split('-').map(Number);
        view = { y: fy, m: fm - 1 };
      }

      return { ...s, items, invoiceNo, view };
    });
  };

  /* ---------- items ---------- */
  const updateItem = (id, field, value) => {
    setState((s) => ({
      ...s,
      items: s.items.map((it) =>
        it.id !== id
          ? it
          : field === 'desc'
            ? { ...it, desc: value, auto: false }
            : { ...it, [field]: value }
      ),
    }));
  };

  const removeItem = (id) => {
    setState((s) => ({ ...s, items: s.items.filter((it) => it.id !== id) }));
  };

  /* ---------- files ---------- */
  const readImage = (file, key) => {
    const r = new FileReader();
    r.onload = () => set(key, r.result);
    r.readAsDataURL(file);
  };

  const onLogoPicked = (e) => {
    const file = e.target.files[0];
    if (file) {
      const r = new FileReader();
      r.onload = () =>
        setState((s) => ({ ...s, logo: r.result, showLogo: true }));
      r.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const onIconPicked = (e) => {
    const file = e.target.files[0];
    if (file && iconTarget.current) readImage(file, iconTarget.current);
    e.target.value = '';
  };

  const saveFile = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `invoice-${state.invoiceNo}-${String(state.clientName)
      .replace(/\W+/g, '-')
      .toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const onFileLoaded = (e) => {
    const file = e.target.files[0];
    if (file) {
      const r = new FileReader();
      r.onload = () => {
        try {
          const data = JSON.parse(r.result);
          setState((s) => {
            const next = { ...s };
            Object.keys(s).forEach((k) => {
              if (k in data) next[k] = data[k];
            });
            // saved files can carry items without ids
            next.items = (next.items || []).map((it) => ({
              ...it,
              id: it.id || uid(),
            }));
            return next;
          });
        } catch {
          alert("That file isn't a saved invoice. Pick a .json this app created.");
        }
      };
      r.readAsText(file);
    }
    e.target.value = '';
  };

  /* ---------- fit preview ---------- */
  useEffect(() => {
    const stage = stageRef.current;
    const scaler = scalerRef.current;
    if (!stage || !scaler) return;
    const fit = () => {
      const avail = stage.clientWidth - 48;
      const s = Math.min(1, avail / 794);
      scaler.style.setProperty('--scale', s);
      scaler.style.height = `${1123 * s}px`;
    };
    const ro = new ResizeObserver(fit);
    ro.observe(stage);
    fit();
    return () => ro.disconnect();
  }, []);

  /* ---------- render ---------- */
  return (
    <div className={`invGen ${fontClass}`.trim()}>
      <div className="app">
        {/* ============ CONTROLS ============ */}
        <aside className="panel">
          <div className="toprow">
            <Link className="backlink" href="/">
              ‹ Back to thestudywave.com
            </Link>
            <form action={lockInvoice}>
              <button type="submit" className="backlink" title="Require the password again">
                Lock
              </button>
            </form>
          </div>

          <div className="brand">
            <div className="brand-dot" />
            <div>
              <h1>Class Invoice Generator</h1>
              <span>Pick the dates, the invoice writes itself</span>
            </div>
          </div>

          <fieldset>
            <legend>Client</legend>
            <label className="f">
              <span>Bill to</span>
              <input type="text" {...bind('clientName')} />
            </label>
            <label className="f">
              <span>Phone shown on invoice</span>
              <input type="text" {...bind('phone')} />
            </label>
            <div className="row row-2">
              <label className="f">
                <span>Invoice no.</span>
                <input type="text" {...bind('invoiceNo')} />
              </label>
              <label className="f">
                <span>Currency code</span>
                <input type="text" {...bind('code')} />
              </label>
            </div>
            <label className="f">
              <span>Total reads as</span>
              <select {...bind('codeFirst')}>
                <option value="1">AUD 70</option>
                <option value="">70 AUD</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Branding</legend>
            <label className="chk">
              <input {...bindChk('showBrand')} /> <span>Show business name</span>
            </label>
            <label className="f">
              <span>Business name</span>
              <input type="text" {...bind('brandName')} />
            </label>
            <label className="chk">
              <input {...bindChk('showLogo')} />{' '}
              <span>Show faded logo behind the table</span>
            </label>
            <div className="btn-row">
              <button
                type="button"
                className="btn"
                onClick={() => logoInput.current?.click()}
              >
                Choose logo image
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => set('logo', null)}
              >
                Remove logo
              </button>
              <input
                ref={logoInput}
                type="file"
                accept="image/*"
                hidden
                onChange={onLogoPicked}
              />
            </div>
            <label className="f" style={{ marginTop: 10 }}>
              <span>Logo strength</span>
              <input type="range" min="4" max="60" {...bind('logoOpacity')} />
            </label>
          </fieldset>

          <fieldset>
            <legend>Footer</legend>
            <label className="chk">
              <input {...bindChk('showFooter')} /> <span>Show footer</span>
            </label>
            <label className="f">
              <span>Instagram handle</span>
              <input
                type="text"
                placeholder="leave empty to hide"
                {...bind('instagram')}
              />
            </label>
            <label className="f">
              <span>Website</span>
              <input
                type="text"
                placeholder="leave empty to hide"
                {...bind('website')}
              />
            </label>
            <label className="f">
              <span>Contact phone</span>
              <input
                type="text"
                placeholder="leave empty to hide"
                {...bind('contactPhone')}
              />
            </label>
            <label className="f">
              <span>Contact email</span>
              <input
                type="text"
                placeholder="leave empty to hide"
                {...bind('contactEmail')}
              />
            </label>
            <p className="hint">
              Empty fields disappear from the invoice, so you can keep just the
              parts you want.
            </p>
            <div className="btn-row" style={{ marginTop: 10 }}>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  iconTarget.current = 'instaIcon';
                  iconInput.current?.click();
                }}
              >
                Instagram icon
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => set('instaIcon', null)}
              >
                Reset
              </button>
            </div>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  iconTarget.current = 'webIcon';
                  iconInput.current?.click();
                }}
              >
                Website icon
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => set('webIcon', null)}
              >
                Reset
              </button>
            </div>
            <input
              ref={iconInput}
              type="file"
              accept="image/*"
              hidden
              onChange={onIconPicked}
            />
            <p className="hint">
              Both come with built-in icons. Swap in your own PNG or SVG if you
              prefer — it gets stored in the saved file, so the invoice still
              prints with no internet.
            </p>
          </fieldset>

          <fieldset>
            <legend>Class defaults</legend>
            <label className="f">
              <span>Class name</span>
              <input type="text" {...bind('label')} />
            </label>
            <div className="row row-3">
              <label className="f">
                <span>Symbol</span>
                <input type="text" {...bind('symbol')} />
              </label>
              <label className="f">
                <span>Price</span>
                <input type="number" step="0.5" min="0" {...bind('rate')} />
              </label>
              <label className="f">
                <span>Hours</span>
                <input type="number" step="0.5" min="0" {...bind('hours')} />
              </label>
            </div>
            <div className="btn-row">
              <button type="button" className="btn" onClick={applyAll}>
                Apply to all classes
              </button>
            </div>
            <p className="hint">
              New dates you pick use these values. Change any single class below.
            </p>
          </fieldset>

          <fieldset>
            <legend>Class dates</legend>
            <div className="cal-head">
              <button
                type="button"
                className="nav"
                aria-label="Previous month"
                onClick={() => shiftView(-1)}
              >
                ‹
              </button>
              <strong>{`${MONTHS[m]} ${y}`}</strong>
              <button
                type="button"
                className="nav"
                aria-label="Next month"
                onClick={() => shiftView(1)}
              >
                ›
              </button>
            </div>

            <div className="dow">
              {DOW.map((d, i) => (
                <button
                  type="button"
                  key={d}
                  title={`Select every ${d}`}
                  onClick={() => selectWeekday(i)}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="grid">
              {Array.from({ length: lead }, (_, i) => (
                <div className="day blank" key={`b${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const d = i + 1;
                const key = iso(y, m, d);
                return (
                  <button
                    type="button"
                    key={key}
                    className={`day${picked.has(key) ? ' on' : ''}`}
                    onClick={() => toggleDate(key)}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            <p className="hint">
              Click a day to add or remove a class. Click a weekday name to
              select every one of them this month.
            </p>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <button type="button" className="btn" onClick={addCustom}>
                Add other line
              </button>
              <button type="button" className="btn" onClick={clearMonth}>
                Clear this month
              </button>
            </div>

            <div className="items">
              {!sorted.length ? (
                <p className="empty">
                  No classes yet. Pick dates on the calendar.
                </p>
              ) : (
                sorted.map((it) => (
                  <div className="item" key={it.id}>
                    <div className="item-top">
                      <span className="date">
                        {it.date ? fmtDate(it.date) : 'No date'}
                      </span>
                      <button
                        type="button"
                        className="x"
                        title="Remove"
                        onClick={() => removeItem(it.id)}
                      >
                        ×
                      </button>
                    </div>
                    <input
                      type="text"
                      value={descOf(it)}
                      onChange={(e) => updateItem(it.id, 'desc', e.target.value)}
                    />
                    <div className="row row-2">
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        aria-label="Hours"
                        value={it.hours}
                        onChange={(e) =>
                          updateItem(it.id, 'hours', e.target.value)
                        }
                      />
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        aria-label="Price"
                        value={it.cost}
                        onChange={(e) =>
                          updateItem(it.id, 'cost', e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </fieldset>

          <fieldset>
            <legend>Totals &amp; note</legend>
            <label className="f">
              <span>Reference bonus deducted</span>
              <input type="number" step="1" min="0" {...bind('bonus')} />
            </label>
            <label className="f">
              <span>Ribbon tag</span>
              <input type="text" {...bind('noteTag')} />
            </label>
            <label className="f">
              <span>Bottom note</span>
              <textarea {...bind('note')} />
            </label>
          </fieldset>

          <fieldset>
            <legend>Next month</legend>
            <div className="btn-row">
              <button type="button" className="btn" onClick={rollForward}>
                Move all dates forward a month
              </button>
            </div>
            <p className="hint">
              Keeps the same days, bumps the invoice number by one.
            </p>
          </fieldset>

          <fieldset>
            <legend>Saving</legend>
            <div className="btn-row">
              <button type="button" className="btn" onClick={saveFile}>
                Save invoice file
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => loadInput.current?.click()}
              >
                Open invoice file
              </button>
              <input
                ref={loadInput}
                type="file"
                accept="application/json"
                hidden
                onChange={onFileLoaded}
              />
            </div>
            <p className="hint">
              Saves a small .json you can reopen next month with everything
              filled in.
            </p>
          </fieldset>
        </aside>

        {/* ============ PREVIEW ============ */}
        <main className="stage" ref={stageRef}>
          <div className="toolbar">
            <span className="hint" style={{ margin: 0 }}>
              Live preview — A4
            </span>
            <span className="spacer" />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.print()}
            >
              Print or save as PDF
            </button>
          </div>

          <div className="scaler" ref={scalerRef}>
            <div className="page">
              <svg
                className="deco"
                viewBox="0 0 794 1123"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="794" height="1123" fill="#ffffff" />
                <circle cx="140" cy="30" r="330" fill="#3A93C4" />
                <circle cx="60" cy="-30" r="230" fill="#2E86B8" opacity=".55" />
                <circle cx="90" cy="300" r="185" fill="#E06A5F" />
                <circle cx="470" cy="-40" r="265" fill="#3E9FCB" />
                <path d="M794 0 H360 A300 300 0 0 0 794 300 Z" fill="#24C0E4" />
                <circle cx="690" cy="60" r="300" fill="#24C0E4" />
                <circle cx="330" cy="120" r="150" fill="#3E9FCB" opacity=".55" />
                <path
                  d="M0 1010 C 210 940, 430 1080, 794 980 L794 1123 L0 1123 Z"
                  fill="#1E2A69"
                />
              </svg>

              <header className="head">
                <p className="big">INVOICE</p>
                <div className="no">INVOICE NO: {state.invoiceNo}</div>
              </header>

              <div className={`brandname${showBrand ? '' : ' hide'}`}>
                {state.brandName}
              </div>

              <section className="card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`wm${showWm ? '' : ' hide'}`}
                  alt=""
                  src={showWm ? state.logo : undefined}
                  style={{ opacity: (Number(state.logoOpacity) || 14) / 100 }}
                />

                <div className="to">
                  <div>
                    <div className="lbl">Invoice to:</div>
                    <div className="client">{state.clientName}</div>
                  </div>
                  <div className="phone">{state.phone}</div>
                </div>

                <div className="tbl-wrap">
                  <div className="tbl-shadow" />
                  <table>
                    <thead>
                      <tr>
                        <th className="desc">Description</th>
                        <th>Hours</th>
                        <th>Cost</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sorted.map((it) => {
                        const sub =
                          (Number(it.hours) || 0) * (Number(it.cost) || 0);
                        return (
                          <tr key={it.id}>
                            <td className="desc">{descOf(it)}</td>
                            <td>{money(it.hours)}</td>
                            <td>
                              {state.symbol}
                              {money(it.cost)}
                            </td>
                            <td>
                              {state.symbol}
                              {money(sub)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="totals">
                  <div className="bonus">
                    {`Reference Bonus - ${state.code} ${money(state.bonus)}`}
                  </div>
                  <div className="total">
                    <b>Total</b>
                    <b>
                      {state.codeFirst
                        ? `${state.code} ${money(total)}`
                        : `${money(total)} ${state.code}`}
                    </b>
                  </div>
                </div>

                <div className="rule" />

                <div className="note">
                  <div className="ribbon">
                    <i>{state.noteTag}</i>
                  </div>
                  <div className="txt">NOTE:- {state.note}</div>
                </div>

                <div className={`foot${showFoot ? '' : ' hide'}`}>
                  <div className={hasInsta ? '' : 'hide'}>
                    <span className="pill">FOLLOW US</span>
                    <div className="link">
                      <span className="icoWrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={state.instaIcon || IG_SRC} alt="" />
                      </span>
                      <span>{state.instagram}</span>
                    </div>
                  </div>

                  <div
                    className={hasWeb ? '' : 'hide'}
                    style={{ alignSelf: 'end' }}
                  >
                    <div className="link">
                      <span className="icoWrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={state.webIcon || WEB_SRC} alt="" />
                      </span>
                      <span>{state.website}</span>
                    </div>
                  </div>

                  <div className={hasPhone || hasMail ? '' : 'hide'}>
                    <h4>Contact Us</h4>
                    <div className={`small${hasPhone ? '' : ' hide'}`}>
                      <span>{state.contactPhone}</span>
                    </div>
                    <div className={`small${hasMail ? '' : ' hide'}`}>
                      <span>{state.contactEmail}</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

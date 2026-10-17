"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronRight, CircleHelp, FileVideo, Gauge, LayoutDashboard, LockKeyhole, Plus, Settings2, Sparkles } from "lucide-react";

type Page = "dashboard" | "library" | "settings";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/library", label: "Video library", icon: FileVideo },
  { href: "/settings", label: "Workspace", icon: Settings2 },
];

const readiness = [
  ["Google Drive", "Not connected"],
  ["YouTube", "Not connected"],
  ["Instagram", "Not connected"],
];

const libraryRows = [
  ["Source videos", "No inventory imported", "0"],
  ["Ready for review", "Awaiting an approved source", "0"],
  ["Scheduled", "No planned deliveries", "0"],
];

function Brand() {
  return <Link className="wordmark" href="/dashboard"><span className="wordmark-mark"><Sparkles size={15} /></span><span>AUTOKAZE</span></Link>;
}

function Navigation() {
  const pathname = usePathname();
  return <nav className="app-nav" aria-label="Workspace navigation">
    {navigation.map(({ href, label, icon: Icon }) => <Link className={pathname === href ? "nav-item active" : "nav-item"} href={href} key={href}><Icon size={17} /><span>{label}</span></Link>)}
  </nav>;
}

function Shell({ children, title, eyebrow }: Readonly<{ children: React.ReactNode; title: string; eyebrow: string }>) {
  return <div className="product-shell">
    <aside className="product-sidebar">
      <Brand />
      <div className="workspace-picker"><span className="workspace-avatar">A</span><span><strong>Autokaze</strong><small>Private workspace</small></span><ChevronRight size={15} /></div>
      <Navigation />
      <div className="sidebar-footer"><div className="safe-note"><LockKeyhole size={15} /><span><strong>Safety first</strong><small>No provider actions are enabled.</small></span></div><Link className="account-chip" href="/settings"><span>AK</span><div><strong>Owner</strong><small>Workspace admin</small></div></Link></div>
    </aside>
    <main className="product-main">
      <header className="product-topbar"><div className="crumb"><span>Workspace</span><ChevronRight size={13} /><strong>{title}</strong></div><div className="topbar-actions"><button className="icon-button" type="button" aria-label="Help"><CircleHelp size={18} /></button><button className="icon-button" type="button" aria-label="Notifications"><Bell size={18} /></button><span className="profile-dot">AK</span></div></header>
      <div className="page-wrap"><p className="section-kicker">{eyebrow}</p>{children}</div>
    </main>
  </div>;
}

function EmptyAction({ label }: Readonly<{ label: string }>) {
  return <Link className="button button-primary" href="/settings"><Plus size={16} />{label}</Link>;
}

function Dashboard() {
  return <Shell title="Overview" eyebrow="Control center">
    <div className="page-heading compact-heading"><div><h1>A quieter way to run your publishing.</h1><p>Everything is ready for connection. Nothing can publish without your review.</p></div><EmptyAction label="View connections" /></div>
    <section className="hero-card"><div><span className="status-pill"><i /> Preview workspace</span><h2>Your workflow starts with a source.</h2><p>Connect Drive, review the imported inventory, then approve exactly what should move forward.</p><Link className="text-action" href="/library">Explore video library <ChevronRight size={16} /></Link></div><div className="hero-orbit" aria-hidden="true"><div className="orbit-core"><Gauge size={27} /></div><span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" /></div></section>
    <section className="metric-row" aria-label="Workspace status"><article><small>Videos in workspace</small><strong>0</strong><span>Import a source to begin</span></article><article><small>Ready for approval</small><strong>0</strong><span>Nothing awaiting review</span></article><article><small>Live connections</small><strong>0<span className="muted-total">/3</span></strong><span>Provider access is disabled</span></article></section>
    <section className="content-grid"><article className="surface-card"><div className="card-heading"><div><p>Readiness</p><h2>Connect when you are ready</h2></div><Link href="/settings">View workspace <ChevronRight size={15} /></Link></div><div className="readiness-list">{readiness.map(([name, state]) => <div key={name}><span className="service-mark">{name.slice(0, 1)}</span><strong>{name}</strong><small>{state}</small><span className="pending-dot" /></div>)}</div></article><article className="surface-card"><div className="card-heading"><div><p>Publishing policy</p><h2>Human approval is required</h2></div></div><div className="policy-copy"><LockKeyhole size={19} /><p>Autokaze records intent before any provider request. An uncertain outcome is reconciled, never blindly retried.</p></div><Link className="text-action" href="/settings">Review release gates <ChevronRight size={16} /></Link></article></section>
  </Shell>;
}

function Library() {
  return <Shell title="Video library" eyebrow="Source inventory">
    <div className="page-heading compact-heading"><div><h1>Your video library.</h1><p>Source files will appear here after an owner-authorized Drive import.</p></div><EmptyAction label="Connection settings" /></div>
    <section className="surface-card library-card"><div className="card-heading"><div><p>Library overview</p><h2>No source videos yet</h2></div><span className="status-pill subtle"><i /> Waiting for source</span></div><div className="library-summary">{libraryRows.map(([label, detail, count]) => <div key={label}><strong>{count}</strong><span><b>{label}</b><small>{detail}</small></span></div>)}</div><div className="empty-library"><FileVideo size={25} /><h3>Keep the original files where they are.</h3><p>Autokaze will read your approved Drive source and captions workbook without changing either one.</p><Link className="button" href="/settings">View connection requirements</Link></div></section>
  </Shell>;
}

function Settings() {
  return <Shell title="Workspace" eyebrow="Configuration">
    <div className="page-heading"><div><h1>Build trust before you publish.</h1><p>Connections and automation remain disabled until each readiness gate is proven.</p></div></div>
    <section className="settings-grid"><article className="surface-card"><div className="card-heading"><div><p>Account connections</p><h2>Not configured</h2></div><span className="status-pill subtle"><i /> 0 of 3</span></div>{readiness.map(([name, state]) => <div className="setting-line" key={name}><span className="service-mark">{name.slice(0, 1)}</span><div><strong>{name}</strong><small>{state}</small></div><span className="coming-soon">Coming soon</span></div>)}</article><article className="surface-card"><div className="card-heading"><div><p>Release gates</p><h2>Before a real publish</h2></div></div><ol className="gate-list"><li>Verify account permissions and OAuth scopes.</li><li>Prove media processing on the actual deployment runtime.</li><li>Test safe reconciliation without publishing.</li><li>Approve a supervised pilot.</li></ol></article></section>
  </Shell>;
}

export function AppShell({ page }: Readonly<{ page: Page }>) {
  if (page === "library") return <Library />;
  if (page === "settings") return <Settings />;
  return <Dashboard />;
}

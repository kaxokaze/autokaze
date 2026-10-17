import { Activity, Zap } from 'lucide-react'

export default function Loading() {
  return (
    <main className="route-loading" role="status" aria-live="polite" aria-label="Loading AUTOKAZE">
      <div className="route-loading-brand"><span><Zap size={18} fill="currentColor" /></span><b>AUTOKAZE</b></div>
      <div className="route-loading-indicator"><span className="loading-spinner" /><Activity size={16} /></div>
      <p>Loading your dashboard…</p>
    </main>
  )
}

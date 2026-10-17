import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-aurora login-aurora-one" />
      <div className="login-aurora login-aurora-two" />
      <section className="login-card">
        <Link className="wordmark" href="/login" aria-label="Autokaze login">
          <span className="wordmark-mark"><Sparkles size={17} /></span>
          <span>AUTOKAZE</span>
        </Link>
        <div className="login-copy">
          <p className="section-kicker">Creator operations</p>
          <h1>Publishing, under your control.</h1>
          <p>Review, approve, and track each video from one calm workspace.</p>
        </div>
        <Link className="button button-primary button-large" href="/dashboard">
          Open workspace preview <ArrowRight size={17} />
        </Link>
        <div className="login-note">
          <LockKeyhole size={16} />
          <span>Authentication and account connections are not enabled yet.</span>
        </div>
      </section>
      <aside className="login-proof" aria-label="Autokaze product promises">
        <div className="proof-icon"><CheckCircle2 size={19} /></div>
        <div>
          <strong>Deliberate by design</strong>
          <p>No live account, source, or publish action is available in this preview.</p>
        </div>
      </aside>
    </main>
  );
}

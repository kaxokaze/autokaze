"use client";

export default function ErrorPage({ reset }: Readonly<{ error: Error; reset: () => void }>) {
  return (
    <main className="main">
      <div className="eyebrow">Unexpected error</div>
      <h1>Autokaze could not load this view.</h1>
      <p className="lead">No publishing action was attempted. You can safely try the view again.</p>
      <button onClick={reset} type="button">Try again</button>
    </main>
  );
}

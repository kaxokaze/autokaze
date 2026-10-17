# Autokaze

Autokaze is a private-first, open-source-ready web application for owner-approved publishing of existing vertical videos to YouTube Shorts and Instagram Reels.

## Status

**W0 — baseline hardening.** This repository deliberately contains no application code, provider credentials, media, OAuth connection, or publishing capability yet.

## Product boundaries

- People connect their Google and Meta accounts through official OAuth started from the frontend.
- Connected-account token material belongs to a workspace/account, is encrypted at rest, and is never committed or exposed to browser code.
- Supabase PostgreSQL will be the durable workflow authority; Google Drive holds source originals; the captions workbook is read-only; Supabase Storage is temporary staging only.
- The initial deployment target is one full-stack Next.js application, with Render Free and Supabase Free subject to documented feasibility proof.
- The system uses deterministic workflow modules, not autonomous agents or LLM decisions.
- One video may be actively processed at a time. Full re-encoding is required before delivery.
- Unknown provider outcomes are reconciled before retrying. The app never blindly retries a potentially completed publish.

## Explicit exclusions for V1

No browser automation, Redis, separate worker service, generic queue provider, provider API calls from database triggers, fuzzy filename matching, or autonomous publishing decisions.

## Branch policy

`main` is the only long-lived branch. Temporary branches may be used only when necessary and are deleted after merge and final verification.

## Documentation

- [W0 project baseline](docs/PROJECT_BASELINE.md)
- [Architecture Decision Record 0001](docs/decisions/0001-foundation-and-safety.md)
- [Security policy](SECURITY.md)

## Local setup

There is no runnable application yet. When application scaffolding begins, copy `.env.example` to `.env.local` and use only non-production local values. Real deployment secrets belong in the deployment platform, never Git.

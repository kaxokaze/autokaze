# W0 Project Baseline

**Date:** 2026-10-17
**Status:** Active foundation

## Repository starting point

`D:\autokaze` was initialized as a new local Git repository on `main`. It began empty. No existing code, Git history, remote, credentials, media, or application configuration was imported.

## Ownership and source-control policy

- `main` is the only long-lived branch.
- Work is completed in small, reviewable commits with build/test evidence recorded before a phase is declared complete.
- A temporary branch is allowed only for a concrete short-lived need; it must be merged, checked, and deleted.
- The GitHub remote will be configured only after its current privacy and contents are explicitly verified.

## Security baseline

- `.env*` files are ignored, while `.env.example` documents variable names without values.
- Deployment secrets remain server-side. They include OAuth client secrets, the Supabase service-role key, token encryption material, and state-signing material.
- User-connected credentials will be obtained through official OAuth, encrypted per workspace/account, and never placed in source control.
- No production/project credential has been requested, read, copied, or stored locally.

## Accepted architecture boundaries

1. One full-stack Next.js deployment unit is the V1 application boundary.
2. Supabase PostgreSQL is the durable authority for workflow state, leases, audit records, and connected-account metadata.
3. Google Drive originals and the captions workbook are immutable inputs during normal processing.
4. Every mapping is exact: a filename plus Drive file ID. There is no fuzzy matching.
5. Provider intent is persisted before any external request. Remote identifiers are persisted immediately when returned.
6. `OUTCOME_UNKNOWN` is a reconcile-only state until the external result is verified.
7. Full re-encoding is required and only one video holds the active processing lease at a time.
8. Artifact cleanup occurs only after the relevant external outcome is confirmed.
9. A source original is moved to `videos/used/` only after verified success on both platforms.

## Required proof gates

Before live provider publishing is implemented or enabled, the team must prove:

- Render Free runtime, restart, scratch-disk, and outbound-transfer behavior is sufficient for a supervised sample.
- Supabase Free Storage limits and provider media-fetch requirements can support temporary staging safely.
- Current official Google/YouTube and Meta/Instagram OAuth, permission, app-review, upload, and reconciliation requirements are met.
- A controlled non-public/dry-run media path recovers safely from interruption without duplicate publication or lost state.

If any gate fails, report the evidence and revise the plan with owner approval. Do not silently add paid infrastructure or weaken safety guarantees.

## W0 exit criteria

- Git working tree has only intended baseline files.
- No secrets or media are tracked.
- Documentation communicates the architecture boundary and security policy.
- Remote repository posture is verified before connection or push.

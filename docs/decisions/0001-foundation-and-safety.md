# ADR 0001: Foundation and safety boundaries

**Status:** Accepted
**Date:** 2026-10-17

## Context

Autokaze will publish owner-approved videos to YouTube Shorts and Instagram Reels. Publication has external and sometimes irreversible effects. The initial platform must operate within a strict zero-infrastructure-cost objective while preserving recoverability and account security.

## Decision

1. Build one full-stack Next.js application for V1.
2. Use Supabase PostgreSQL as the durable source of truth for workflow state, audit history, leases, and encrypted connected-account data.
3. Use official frontend-initiated OAuth for Google and Meta; provider tokens are stored encrypted per connected account.
4. Implement deterministic workflow modules: scan, validate, approve, schedule, encode, publish, reconcile, clean up, and archive.
5. Represent uncertain external outcomes as `OUTCOME_UNKNOWN`; reconcile before a retry.
6. Use a durable single active-video lease with a fencing generation. Do not hold database transactions across media processing or provider uploads.
7. Retain Google Drive originals and the captions workbook as immutable normal-flow inputs. Archive an original only after verified dual-platform completion.
8. Require an explicit owner-approved supervised pilot before enabling real publishing.

## Consequences

V1 prioritizes explicit state, safe recovery, provider compliance, and auditability above parallelism or autonomous behavior. Any later decision that changes these boundaries must be recorded in a new ADR.

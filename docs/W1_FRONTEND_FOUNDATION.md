# W1 Frontend Foundation

**Status:** Implemented locally and verified on 2026-10-17.

## Scope

The visual interface was adapted from the owner-provided `autokaze-main.zip`. This use is intentionally limited to the ZIP's frontend presentation layer:

- dashboard visual system and responsive styles;
- frontend dashboard component and demo-state interactions;
- overview, queue, item-detail, sources, publishing-history, and settings/readiness routes;
- loading treatment and application icon.

## Explicit exclusions

The following ZIP material was not copied into Autokaze at W1:

- OAuth routes, Drive callback/connect/disconnect routes, cron routes, job routes, and other API behavior;
- Supabase, provider, workflow, HTTP, token, and environment helper libraries;
- database migrations, tests, CI workflow, deployment configuration, and environment files;
- the Drive connection panel, because it performs authentication and provider actions that belong to later phases.

The navigation intentionally excludes the unavailable Drive connection route. Source status is presented as a non-connected frontend state only.

## Safety behavior

- All visible records are fictional demo state stored in browser session storage.
- UI controls display notices only; they do not call providers, access Drive, connect OAuth, or publish media.
- The existing `/api/health` endpoint remains the sole application API route.
- The app retains the W0 security headers and server-only environment-variable boundary.

## Verification evidence

- `npm run typecheck` passed.
- `npm run build` passed with Next.js 16.4.2.
- `npm audit --omit=dev` reported zero vulnerabilities.
- Production server visual inspection passed for overview, video queue, and settings/readiness routes.
- The health endpoint returned `200` with `{"status":"ok","service":"autokaze"}` before the visual test server was stopped.

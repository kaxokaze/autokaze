# Security policy

## Reporting

Do not create a public issue containing credentials, OAuth tokens, personally identifiable information, or a reproducible security exploit. Contact the repository owner privately with the affected area, impact, and safe reproduction notes.

## Secret-handling rules

- Never commit `.env` files, provider credentials, Supabase service-role keys, encryption keys, session tokens, refresh tokens, media URLs containing access signatures, or user data.
- OAuth access and refresh tokens are per connected account and must be encrypted at rest before persistence.
- Browser code may use only intentionally public Supabase configuration. Privileged Supabase and OAuth client secrets are server-only.
- Rotate and revoke exposed credentials immediately. Treat a committed secret as compromised even if the repository is private.

## Product safety rules

- A provider operation with an uncertain result is `OUTCOME_UNKNOWN`, not a failure safe to retry.
- Audit records must never contain raw tokens or full secret values.
- Real publishing remains disabled until a documented, owner-approved supervised pilot passes.

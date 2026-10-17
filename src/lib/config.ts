import { z } from "zod";

const publicConfigSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
});

const serverConfigSchema = z.object({
  APP_ORIGIN: z.url().default("http://localhost:3000"),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  TOKEN_ENCRYPTION_KEY: z.string().min(1).optional(),
  OAUTH_STATE_SIGNING_SECRET: z.string().min(1).optional(),
  GOOGLE_OAUTH_CLIENT_ID: z.string().min(1).optional(),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string().min(1).optional(),
  META_OAUTH_APP_ID: z.string().min(1).optional(),
  META_OAUTH_APP_SECRET: z.string().min(1).optional(),
});

export const publicConfig = publicConfigSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export const serverConfig = serverConfigSchema.parse({
  APP_ORIGIN: process.env.APP_ORIGIN,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  TOKEN_ENCRYPTION_KEY: process.env.TOKEN_ENCRYPTION_KEY,
  OAUTH_STATE_SIGNING_SECRET: process.env.OAUTH_STATE_SIGNING_SECRET,
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  META_OAUTH_APP_ID: process.env.META_OAUTH_APP_ID,
  META_OAUTH_APP_SECRET: process.env.META_OAUTH_APP_SECRET,
});

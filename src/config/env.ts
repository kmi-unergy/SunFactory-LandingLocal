/**
 * Environment configuration
 * Access environment variables through this module for type safety
 */

export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  appName: import.meta.env.VITE_APP_NAME,
  appVersion: import.meta.env.VITE_APP_VERSION,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const

// Validate required environment variables
const requiredEnvVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY', 'VITE_APP_NAME', 'VITE_APP_VERSION'] as const

requiredEnvVars.forEach((envVar) => {
  if (!import.meta.env[envVar]) {
    console.warn(`Warning: Required environment variable ${envVar} is not set`)
  }
})

export default env

/**
 * Supabase Client Configuration
 */

import { createClient } from '@supabase/supabase-js';
import env from './env';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  env.supabase.url,
  env.supabase.anonKey
);

export default supabase;

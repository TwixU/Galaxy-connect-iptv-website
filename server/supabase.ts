import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || 'https://bngzzprfrrvkyqyhkyjx.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZ3p6cHJmcnJ2a3lxeWhreWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjMxNTksImV4cCI6MjA3OTIzOTE1OX0.XsDOlMVs6vkgW196kl9uZ0lDOXONdpz6rWoQ7pXMpQI';

export const supabase = createClient(supabaseUrl, supabaseKey);

// ==== Shared Supabase config ====
// Used by both index.html (Ledger) and zone-flip.html.
// Edit these in ONE place and both pages pick up the change.
const SUPABASE_URL = "https://cxkpdwxvsygpdknunsdd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4a3Bkd3h2c3lncGRrbnVuc2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NzIxNjksImV4cCI6MjEwMjE0ODE2OX0.BuABs2ZyplpVd2bf8SqAVy1Rr_nl9mMnfsBiZ2YHDK0";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

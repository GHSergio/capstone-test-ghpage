import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzptejcwohmguzbdkskf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cHRlamN3b2htZ3V6YmRrc2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NzIzMDUsImV4cCI6MjAzNDM0ODMwNX0.fZfV_TsPM5Zm_FAIiee9Q2pj1btFXk-SdXGdrExNXV4";
export const supabase = createClient(supabaseUrl, supabaseKey);

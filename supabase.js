import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://nskzmnazcgewjmxroxzx.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5za3ptbmF6Y2dld2pteHJveHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1ODQ1MzQsImV4cCI6MjAzMTE2MDUzNH0._9Qb4VFVucBDMZcL4VGtImQz7M9Xu5jyguKA3mnkhow";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//import { supabaseClient } from "supabase";
import { createClient } from "https://esm.sh/@supabase/supabase-js@1.35.4"
import { config } from "config"

const url: string = config().SUPABASE_URL;
const key: string = config().SUPABASE_ANON_KEY;

export const supabase = createClient(url,key);
//onsole.log(Deno.env.get("SUPABASE_URL"));
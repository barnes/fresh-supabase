//import { supabaseClient } from "supabase";
import { createClient } from "supabase"
import { config } from "config"

const url: string = config().SUPABASE_URL;
const key: string = config().SUPABASE_ANON_KEY;

export const supabase = createClient(url,key);
//onsole.log(Deno.env.get("SUPABASE_URL"));
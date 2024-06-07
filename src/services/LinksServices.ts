import { LinksResponse } from "./ServicesTypes";
import { supabase } from "./Supabase";

export async function getLinks() {
    const { data } = await supabase
        .from("links")
        .select("resume")
        .limit(1)
        .single<LinksResponse>()

    return data ?? null
}
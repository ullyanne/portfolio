import { JobsResponse } from "./ServicesTypes";
import { supabase } from "./Supabase";

export async function getJobs() {
    const { data } = await supabase
        .from("jobs")
        .select()
        .order("id")
        .returns<JobsResponse[]>()

    return data ?? []
}
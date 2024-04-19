import { ProjectsResponse } from "./ServicesTypes";
import { supabase } from "./Supabase";

export async function getProjects() {
    const { data } = await supabase
        .from("projects")
        .select()
        .order("id")
        .returns<ProjectsResponse[]>()

    return data ?? []
}
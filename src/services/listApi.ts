import supabase from "./supabase";

//GET
export async function getLists(id: string) {
    const { data, error } = await supabase
        .from("list")
        .select()
        .eq("board_id", id);

    if(error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    return data;
};

//CREATE

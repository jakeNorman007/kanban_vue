import supabase from "./supabase";

//GET
export async function getBoards() {
    const { data, error } = await supabase
        .from("board")
        .select("*");

    if(error) {
        console.log(error);
        throw new Error("Boards could not be gathered");       
    }

    return data;
}

export async function getBoard(id: string) {
    const { data, error } = await supabase
        .from("board")
        .select("*")
        .eq("id", id)
        .single();

    if(error) {
        console.log(error);
        throw new Error("Board could not be gathered");
    }

    return data;
};

//CREATE

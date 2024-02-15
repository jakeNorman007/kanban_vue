import supabase from "./supabase";

//**GET REQUESTS**

//fetches all the boards in the table "board"
export async function getAllBoards() {
    const { data, error } = await supabase.from("board").select("*");

    if(error) {
        console.log(error);
        throw new Error("Boards could not be gathered");       
    }

    return data;
}

//fetches an individual board based off it's id in table "board", *MAY NOT NEED*
export async function getBoards(id: string) {
    const { data, error } = await supabase.from("board").select("*").eq("id", id).single();

    if(error) {
        console.log(error);
        throw new Error("Board could not be gathered");
    }

    return data;
};

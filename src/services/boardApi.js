import supabase from "./supabase";

export async function getBoards() {
    const { data, error } = await supabase
        .from('board')
        .select('*');

    if(error){
        console.log(error);
        throw new Error("Boards could not be gathered");       
    }

    return data;
}

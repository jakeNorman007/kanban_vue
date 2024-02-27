import supabase from "./supabase";

//**GET**
export async function getAllBoards() {
    const { data, error } = await supabase.from("board").select("*");

    if (error) {
        console.log(error);
        throw new Error("Board could not be gathered");
    }

    return data;
};

//**!!!!!!may not need this!!!!!!**
export async function getBoard(id) {
    const { data, error } = await supabase.from("board").select("*").eq("id", id).single();

    if(error) {
        console.log(error);
        throw new Error("Board could not be gathered");
    }

    return data;
};

//**UPDATE**
export async function updateBoard(newBoard) {
    const { data, error } = await supabase.from("board").update(newBoard).eq("id", 1).single();

    if (error) {
        console.log(error);
        throw new Error("Board name could not be updated");
    }

    return data;
};

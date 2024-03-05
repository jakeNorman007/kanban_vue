import supabase from "./supabase";

//**GET REQUESTS**
export async function getCards(id) {
    const { data, error } = await supabase.from("card").select().order("id").eq("list_id", id);

    if (error) {
        console.log(error);
        throw new Error("Cards could not be gathered");
    }

    return data;
};

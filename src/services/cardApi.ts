import supabase from "./supabase";

//**GET REQUESTS**

export async function getCards(id: string) {
    const { data, error } = await supabase.from("card").select().eq("list_id", id);

    if (error) {
        console.log(error);
        throw new Error("Cards could not be gathered");
    }

    return data;
};

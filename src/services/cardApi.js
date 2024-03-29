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

//**UPDATE**//
//updates/edits the card's name, it know's based off the list id in the edit modal
export async function updateCard(cardName, id) {
    console.log(cardName, id);
    const { data, error } = await supabase.from("card").update({ cardName, id }).eq("id", id).single();

    if (error) {
        console.log(error);
        throw new Error("Card name could not be updated");
    }

    return data;
};

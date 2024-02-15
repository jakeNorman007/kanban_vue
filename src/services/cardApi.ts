import supabase from "./supabase";

//**GET REQUESTS**
//fetches the cards related to the "list" table foreign key, from the "card" table
export async function getCards() {
    const { error, data } = await supabase
        .from("card")
        .select("*");

    if (error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    return data;
};

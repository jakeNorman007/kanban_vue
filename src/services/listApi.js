import supabase from "./supabase";

//**GET**
//fetches all the lists based on the "board" table foreign id, from the "list" table
export async function getLists(id) {
    const { data, error } = await supabase.from("list").select().eq("board_id", id);

    if (error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    return data;
};

//retrieves list by it's id
export async function getList(id) {
    const { data, error } = await supabase.from("list").select("*").eq("id", id).single();

    if (error) {
        console.log(error);
        throw new Error("Single list could not be gathered");
    }

    return data;
};

//**CREATE**
export async function createList({ listName, board_id }) {
    const { data, error } = await supabase.from("list").insert({ listName: listName, board_id }).select();

    if (error) {
        console.log(error);
        throw new Error("List could not be created");
    }

    return data;
};

//**UPDATE**
export async function updateList({listName, id}) {
    console.log(listName, id);
    const { data, error } = await supabase.from("list").update({listName: listName}).eq("id", id);

    if (error) {
        console.log(error);
        throw new Error("List name could not be updated");
    }

    return data;
};

//**DELETE**
export async function deleteList(id) {
    const { data, error } = await supabase.from("list").delete().eq("id", id);

    if (error) {
        console.log(error);
        throw new Error("List could not be deleted");
    }

    return data;
};

import supabase from "./supabase";

//**GET**//
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
    const { data, error } = await supabase.from("list").select("*").order("id").eq("id", id).single();

    if (error) {
        console.log(error);
        throw new Error("Single list could not be gathered");
    }

    return data;
};

//**CREATE**
//creates a new list, based off the board's id. in this case it should be board_id: 1
export async function createList({ listName, board_id }) {
    const { data, error } = await supabase.from("list").insert({ listName: listName, board_id }).select();

    if (error) {
        console.log(error);
        throw new Error("List could not be created");
    }

    return data;
};

//**UPDATE**//
//updates/edits the list's name, it know's based off the list id in the edit modal
export async function updateList(listName, id) {
    console.log(listName, id);
    const { data, error } = await supabase.from("list").update({ listName, id }).eq("id", id).single();

    if (error) {
        console.log(error);
        throw new Error("List name could not be updated");
    }

    return data;
};

//**DELETE**//
//deletes list based of id, warning modal pops up to double check
export async function deleteList(id) {
    const { data, error } = await supabase.from("list").delete().eq("id", id);

    if (error) {
        console.log(error);
        throw new Error("List could not be deleted");
    }

    return data;
};
